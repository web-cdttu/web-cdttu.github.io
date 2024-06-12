import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  readonly sheetUrl = `https://docs.google.com/spreadsheets/d/e/{id}/pub?output=xlsx`
  readonly sheetId = '2PACX-1vQ5sfwsEJHbuBZVbB2gPIO2wq7PyMG-SRa1u6be7_x4TzjjpSW3HV79J_VeiY3y0w'
  readonly homeSheet = 'home';
  readonly settingsWorbook: any;
  readonly homeSettings: any
  isActivesettings = false;

  constructor() {
    this.fetchWorkbook()
  }

  fetchWorkbook() {
    if (!this.settingsWorbook) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref: Mutable<this> = this;
      const sheetUrl = this.sheetUrl.replace('{id}', this.sheetId)
      fetch(sheetUrl)
        .then((res: any) => res.arrayBuffer())
        .then((req => {
          const workbook = read(req)
          ref.settingsWorbook = workbook
          const homeSettings = this.settingsWorbook.Sheets[this.homeSheet]
          const data = this.decodeRawSheetData(homeSettings)
          ref.homeSettings = data;          
          this.isActivesettings = true
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

  getAllSettings(request?: any): Observable<any> {
    if (this.settingsWorbook) {
      return new Observable((observable) => {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const ref: Mutable<this> = this;
        const querySheet = this.homeSheet        
        const news = this.settingsWorbook.Sheets[querySheet]
        const data = this.decodeRawSheetData(news)
        ref.homeSettings = data;  
        data?.forEach((item: any) => {
          if (item.date) {
            item.date = new Date(item.date).getTime()
          }
        })
        const response = {
          code: data?.length > 0 ? 200 : 404,
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
}
