import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';
import { SheetService } from '../sheet/sheet.service';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';
  // readonly sheetUrl = `https://docs.google.com/spreadsheets/d/e/{id}/pub?output=xlsx`
  readonly sheetId = isDevMode() ? `2PACX-1vRoqHuEM3WY4LLcLQQhs6C7fixMlm3fqWKfqTg8V8AKpCi2PXzBYdLztfNx7JjuYg` :  '2PACX-1vQ5sfwsEJHbuBZVbB2gPIO2wq7PyMG-SRa1u6be7_x4TzjjpSW3HV79J_VeiY3y0w'
  readonly settingsWorbookName = 'settings';
  readonly settingsWorbook: any;
  readonly homeSheet = 'home';
  readonly homeHeader = <any>{key: 'key', module: 'module', data: 'data', type: 'type'};
  readonly introduceSheet = 'introduce';
  readonly introduceHeader = <any>{key: 'key', module:'module', data: 'data', type: 'type'};

  isActivesettings = false;
  constructor(
    private sheetService: SheetService
  ) {}

  fetchsettingsData(): Observable<any> {
    const ref: Mutable<this> = this;
    return new Observable((observable) =>{
      this.sheetService.fetchSheet(this.sheetId).subscribe((res: any) => {
        const response = <any>{}
        if(res.status == 200) {
          response.status = 200
          ref.settingsWorbook = res.workbook;
          response.data = ref.settingsWorbook
          const homeWorbook = res.workbook.Sheets['home'];
          const introduceWorbook = res.workbook.Sheets['introduce'];
          this.sheetService.decodeRawSheetData(homeWorbook, 2).subscribe((reshome: any) => {
            response.home = reshome;
            this.sheetService.decodeRawSheetData(introduceWorbook, 2).subscribe((resintroduce: any) => {
              response.introduce = resintroduce;
              observable.next(response)
              observable.complete();
            })
          })           
        }
      })
    });
  }
}