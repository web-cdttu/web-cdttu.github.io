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
  readonly sheetId = `2PACX-1vTX3a-Z8GG0hWweLX3S36jrC_GQ0Uzhtz_Es1LulCL1jjdCFe878x18iVuMJLtYOg`
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
          const news = this.newsWorbook.Sheets[this.newsSheet]
          const data = this.decodeRawSheetData(news).filter((item: any) => !!item.id)
          data?.forEach((item: any) => {
            item.date = new Date(item.date).getTime()
          })
          ref.newsData = data
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
        const querySheet = this.newsSheet
        const news = this.newsWorbook.Sheets[querySheet]
        const data = this.decodeRawSheetData(news).filter((item: any) => !!item.id)
        data?.forEach((item: any) => {
          if (item.date) {
            item.date = new Date(item.date).getTime()
          }
          if (item?.thumbnailType == 'googleDrive') {
            item.thumbnail = `https://lh3.googleusercontent.com/fife/${item.thumbnail}`
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

  getNewsBySlug(slug: any): Observable<any> {
    console.log(this.newsData);

    if (this.newsWorbook) {
      return new Observable((observable) => {
        const data = this.newsData.find((item: any) => item.slug == slug)
        const response = {
          code: data ? 200 : 404,
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
