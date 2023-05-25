import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  readonly newsWorbook: any;
  readonly sheetUrl = `https://docs.google.com/spreadsheets/d/e/{id}/pub?output=xlsx`
  readonly sheetId = `2PACX-1vQpmFl1eW-rWzRKMxiSn_xAu4qHpH_NFNgWgtFNmn5Ho97hcPoEV18mTFzSNMT2SA`
  readonly newsSheet = 'news'
  readonly newsData = <any>[]
  isActiveNews = false;
  constructor() {
    this.fetchAllNews()
  }

  fetchAllNews() {
    if (!this.newsWorbook) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref: Mutable<this> = this;
      const sheetUrl = this.sheetUrl.replace('{id}', this.sheetId)
      fetch(sheetUrl)
        .then((res: any) => res.arrayBuffer())
        .then((req => {
          const workbook = read(req)
          ref.newsWorbook = workbook
          this.isActiveNews = true
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

  getAllNews(request?: any): Observable<any> {
    if (this.newsWorbook) {
      return new Observable((observable) => {
        let querySheet = this.newsSheet
        if (request?.subject && request?.time) {
          querySheet = request.subject
        }
        const news = this.newsWorbook.Sheets[querySheet]
        let data = this.decodeRawSheetData(news).filter((item: any) => !!item.id)
        data?.forEach((item: any) => {
          item.date = new Date(item.date).getTime()
        })
        if (request?.time) {
          data = data.map((item: any) => {
            const reponseObject = <any>{}
            reponseObject['id'] = item.id
            reponseObject['na'] = item.na
            reponseObject['bi'] = item.bi
            reponseObject['checkedIn'] = item[request.time]
            return reponseObject
          })
        }
        if (!request?.subject && !request?.time) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          const ref: Mutable<this> = this;
          ref.newsData = data
        }
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
