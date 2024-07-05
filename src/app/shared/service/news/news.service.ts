import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';
import { SheetService } from '../sheet/sheet.service';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  readonly EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';
  readonly sheetId = isDevMode() ? `2PACX-1vTxoXr-fQ2nVBCXMzr6DghyJhIB4vyV964JFPgIJRBlp0sB_6DrVi62DkspDqjewg` : `2PACX-1vTX3a-Z8GG0hWweLX3S36jrC_GQ0Uzhtz_Es1LulCL1jjdCFe878x18iVuMJLtYOg`
  readonly newWorbookName = 'news'
  readonly newsWorbook: any;
  readonly newsSheet = 'news'
  readonly newsHeader = <any>{ id: 'Mã bài đăng', data: 'Ngày đăng', title: 'Tiêu đề', slug: 'Đường dẫn', content: 'Nội dung', type: 'Loại', googleDocPublish: 'Nội dung từ Google Doc', thumbnail: 'Thumbnail', thumbnailType: '' }
  readonly newsData = <any>[]
  isActiveNews = false;
  constructor(
    private sheetService: SheetService
  ) {
  }

  fetchAllNews(): Observable<any> {
    return new Observable((observable) => {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref: Mutable<this> = this;
      const response = <any>{}
      if (!this.newsWorbook) {
        this.sheetService.fetchSheet(this.sheetId).subscribe((res: any) => {
          if (res.status === 200) {
            response.status = 200
            ref.newsWorbook = res.workbook
            const news = ref.newsWorbook.Sheets[this.newsSheet]
            this.sheetService.decodeRawSheetData(news, 2).subscribe((resnews: any) => {
              const data = resnews.filter((item: any) => !!item.id)
              data?.forEach((item: any) => {
                item.date = new Date(item.date).getTime()
              })
              response.data = data
              observable.next(response)
              observable.complete()
            })
          }
        })
      } else {
        const news = ref.newsWorbook.Sheets[this.newsSheet]
        this.sheetService.decodeRawSheetData(news, 2).subscribe((resnews: any) => {
          const data = resnews.filter((item: any) => !!item.id)
          data?.forEach((item: any) => {
            item.date = new Date(item.date).getTime()
          })
          response.data = data
          observable.next(response)
          observable.complete()
        })
      }
    })
  }
}
