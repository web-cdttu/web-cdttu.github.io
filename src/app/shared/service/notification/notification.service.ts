import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  readonly notificationWorbook: any;
  readonly sheetUrl = `https://docs.google.com/spreadsheets/d/e/{id}/pub?output=xlsx`
  readonly sheetId = `2PACX-1vQlDH9tPrnQ8zl1W4Dzgzf2eU_tgYsSTKEBu5DSnGRmbKtg4TNV5zXg051wbNzTAw`
  readonly notificationSettingSheet = 'setting'
  readonly notificationData = <any>{}
  readonly notificationAllList = <any>[]
  readonly notificationTuSiKhoaMuc = 'notificationTuSiKhoaMuc'
  readonly notificationChucViecKhoaMuc = 'notificationChucViecKhoaMuc'
  readonly notificationChucSacKhoaMuc = 'notificationChucSacKhoaMuc'
  isActiveNotification = false;
  constructor() {
    this.fetchAllNotification()
  }

  fetchAllNotification() {
    if (!this.notificationWorbook) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref: Mutable<this> = this;
      const sheetUrl = this.sheetUrl.replace('{id}', this.sheetId)
      fetch(sheetUrl)
        .then((res: any) => res.arrayBuffer())
        .then((req => {
          const workbook = read(req)
          ref.notificationWorbook = workbook
          const notification = this.notificationWorbook.Sheets[this.notificationSettingSheet]
          const settingData = this.decodeRawSheetData(notification).filter((item: any) => !!item.id)
          const data = <any>{}
          settingData?.forEach((item: any) => {
            if (item?.id) {
              const currentData = this.decodeRawSheetData(this.notificationWorbook.Sheets[item?.id]).filter((item: any) => !!item.id)
              data[item.id] = currentData
            }
          })
          ref.notificationData = data
          this.isActiveNotification = true
        }))
    }
  }

  private decodeRawSheetData(data: any, header?: any) {
    const column = [...new Set(Object.keys(data).map((col: any) => {
      const returnData = data[col.replace(/\d+((.|,)\d+)?/, '2')]
      if (returnData) {
        if (!parseFloat(returnData['v'])) {
          return returnData['v']
        } else {
          return new Date(returnData['w']).getTime()
        }
      }
    }))]?.filter((col: any) => !!col)
    const responseData = utils.sheet_to_json<any>(data, {
      header: header || column,
      raw: false
    })?.slice(2);
    return responseData
  }

  getAllNotification(request?: any): Observable<any> {
    if (this.notificationWorbook) {
      return new Observable((observable) => {
        const notification = this.notificationWorbook.Sheets[this.notificationSettingSheet]
        const settingData = this.decodeRawSheetData(notification).filter((item: any) => !!item.id)
        const data = <any>[]
        settingData?.forEach((item: any) => {
          if (item?.id && item?.slug) {
            const currentData = this.decodeRawSheetData(this.notificationWorbook.Sheets[item?.id]).filter((item: any) => !!item.id)
            currentData.forEach((cd: any) => {
              data.push({
                type: item.id,
                data: cd,
                slug: item?.slug
              })
            })
          }
        })
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const ref: Mutable<this> = this;
        ref.notificationAllList = data
        const response = {
          code: Object.keys(data).length > 0 ? 200 : 404,
          data: data
        }
        observable.next(response)
        observable.complete()
      })
    }
    return new Observable((observable) => {
      const response = {
        code: 404
      }
      observable.next(response)
      observable.complete()
    })
  }

  getNotificationById(id: any): Observable<any> {
    if (this.notificationWorbook) {
      return new Observable((observable) => {
        if (this.notificationAllList.length > 0) {
          const data = this.notificationAllList.find((item: any) => item?.data?.id == id || item?.id == id)
          const response = {
            code: data ? 200 : 404,
            data: data?.data ? data.data : data
          }
          observable.next(response)
          observable.complete()
        } else {
          const notification = this.notificationWorbook.Sheets[this.notificationSettingSheet]
          const settingData = this.decodeRawSheetData(notification).filter((item: any) => !!item.id)
          const list = <any>[]
          settingData?.forEach((item: any) => {
            if (item?.id) {
              const currentData = this.decodeRawSheetData(this.notificationWorbook.Sheets[item?.id]).filter((item: any) => !!item.id)
              currentData.forEach((cd: any) => {
                list.push(cd)
              })
            }
          })
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const ref: Mutable<this> = this;
          ref.notificationAllList = list
          const data = list.find((item: any) => item.id == id)
          const response = {
            code: data ? 200 : 404,
            data: data
          }
          observable.next(response)
          observable.complete()
        }
      })
    }
    return new Observable((observable) => {
      const response = {
        code: 404
      }
      observable.next(response)
      observable.complete()
    })
  }
}
