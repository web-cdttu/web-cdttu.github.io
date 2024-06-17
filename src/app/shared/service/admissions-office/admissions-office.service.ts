import { Injectable, isDevMode } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { read, utils } from 'xlsx';
import { DatePipe } from '@angular/common';
import { SheetService } from '../sheet/sheet.service';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }
@Injectable({
  providedIn: 'root'
})
export class AdmissionsOfficeService {

  readonly EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';
  readonly sheetId = isDevMode() ? `2PACX-1vSuwMAAYOYwCQqbnNz-_fIb6EHBAmBG0J84jl_3wDPDz7V6sBuUm9iImBioeU8gGw` : `2PACX-1vQbYcOhWEjk1qAFZ2BPunhuL-TWIFfuucgp423nWIXG8GqArdMoOC1BphgVyCbabA`
  readonly admissionsOfficeWorbookName = 'admissionsOffice';
  readonly admissionsOfficeWorbook: any;
  readonly settingStudentSheet = 'settingStudent'
  readonly settingStudentHeader = <any>{ id: 'Mã học viên', na: 'Họ và Tên', bi: 'Năm sinh', co: 'Tổng cộng' }
  readonly settingSubjectSheet = 'settingSubject'
  readonly settingSubjectHeader = <any>{ id: 'Mã môn học', na: 'Tên môn học' }
  readonly settingStudentData = <any>[]
  isActiveAdmissionOffice: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private sheetService: SheetService
  ) {
  }

  fetchAddmissionData(): Observable<any> {
    const ref: Mutable<this> = this;
    return new Observable((observable) => {
      this.sheetService.fetchSheet(this.sheetId)
        .subscribe((res: any) => {
          if (res.status === 200) {
            ref.admissionsOfficeWorbook = res.workbook;
            console.log(res.workbook);
            observable.next({
              status: 200,
              data: ref.admissionsOfficeWorbook
            })
          }
        })
    });
  }

  getSubject(): Observable<any> {
    const ref: Mutable<this> = this;
    return new Observable((observable) => {
      if (this.admissionsOfficeWorbook) {
        const sheet = this.admissionsOfficeWorbook.Sheets['settingSubject']
        this.sheetService.decodeRawSheetData(sheet, 2)
          .subscribe((res: any) => {
            observable.next({
              status: 200,
              data: res
            })
          })
      } else {
        this.fetchAddmissionData().subscribe();
      }
    });
  }

  getSubjectTime(subjectId: any): Observable<any> {
    return new Observable((observable) => {
      const subject = this.admissionsOfficeWorbook.Sheets[subjectId]
      let response = {
        status: 404,
        data: <any>[]
      }
      if (subject) {
        const objectKey = <any>Object.keys(subject).
          filter((key) => /^[a-zA-Z]*2[a-zA-Z\\s-]*$/.test(key)).
          reduce((cur, key) => { return Object.assign(cur, { [key]: subject[key]['v'] }) }, {})
        const subjectArray = Object.keys(objectKey).map((item: any) => {
          if (Object.keys(this.settingStudentHeader).includes(objectKey[item])) {
            return null
          }
          return objectKey[item];
        })?.filter((item: any) => !!item)
        response = {
          status: subjectArray?.length > 0 ? 200 : 404,
          data: subjectArray
        }
      }
      observable.next(response)
      observable.complete()
    })
  }

  getStudentSettings(request?: any): Observable<any> {
    return new Observable((observable) => {
      let querySheet = this.settingStudentSheet
      if (request?.subject && request?.time) {
        if (this.admissionsOfficeWorbook.SheetNames.includes(request?.subject)) {
          querySheet = request.subject
        }
      }
      let studentSetting = this.admissionsOfficeWorbook.Sheets[querySheet]
      let data = <any>[];
      this.sheetService.decodeRawSheetData(studentSetting, 2).subscribe((res: any) => {
        data = res.filter((item: any) => !!item.id);
        if (request?.time) {
          data = data.map((item: any) => {
            let reponseObject = <any>{}
            reponseObject['id'] = item.id
            reponseObject['na'] = item.na
            reponseObject['bi'] = item.bi
            reponseObject['checkedIn'] = item[request.time]
            reponseObject['checked'] = item[request.time] > 0 ? true : false
            return reponseObject
          })
        }
        if (!request?.subject && !request?.time) {
          const ref: Mutable<this> = this;
          ref.settingStudentData = data
        }
        const response = {
          status: data?.length > 0 ? 200 : 404,
          data: data
        }
        observable.next(response)
        observable.complete()
      })
    })
  }
}
