import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { read, utils } from 'xlsx';

type Mutable<T> = { -readonly [P in keyof T]: T[P] }
@Injectable({
  providedIn: 'root'
})
export class AdmissionsOfficeService {

  readonly EXCEL_TYPE = 'application/vnd.openxmlformatsofficedocument.spreadsheetml.sheet;charset=UTF-8';
  readonly EXCEL_EXTENSION = '.xlsx';
  readonly sheetUrl = `https://docs.google.com/spreadsheets/d/e/{id}/pub?output=xlsx`
  readonly sheetId = `2PACX-1vQbYcOhWEjk1qAFZ2BPunhuL-TWIFfuucgp423nWIXG8GqArdMoOC1BphgVyCbabA`
  readonly admissionsOfficeWorbookName = 'admissionsOffice';
  readonly admissionsOfficeWorbook: any;
  readonly settingStudentSheet = 'settingStudent'
  readonly settingStudentHeader = <any>{ id: 'Mã học viên', na: 'Họ và Tên', bi: 'Năm sinh', co: 'Tổng cộng' }
  readonly settingSubjectSheet = 'settingSubject'
  readonly settingSubjectHeader = <any>{ id: 'Mã môn học', na: 'Tên môn học' }
  readonly settingStudentData = <any>[]
  isActiveAdmissionOffice = false;

  constructor() {
    this.fetchWorkbook()
  }

  fetchWorkbook() {
    if (!this.admissionsOfficeWorbook) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const ref: Mutable<this> = this;
      const sheetUrl = this.sheetUrl.replace('{id}', this.sheetId)
      fetch(sheetUrl)
        .then((res: any) => res.arrayBuffer())
        .then((req => {
          const workbook = read(req)
          ref.admissionsOfficeWorbook = workbook
          this.isActiveAdmissionOffice = true
        }))
    }
  }

  getStudentSettings(request?: any): Observable<any> {
    return new Observable((observable) => {
      let querySheet = this.settingStudentSheet
      if (request?.subject && request?.time) {
        querySheet = request.subject
      }
      let studentSetting = this.admissionsOfficeWorbook.Sheets[querySheet]
      let data = this.decodeRawSheetData(studentSetting).filter((item: any) => !!item.id)
      if (data?.length === 0) {
        studentSetting = this.admissionsOfficeWorbook.Sheets[this.settingStudentSheet]
        data = this.decodeRawSheetData(studentSetting).filter((item: any) => !!item.id)
      }
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
        ref.settingStudentData = data
      }
      const response = {
        code: data?.length > 0 ? 200 : 404,
        data: data
      }
      observable.next(response)
      observable.complete()
    })
  }

  private decodeRawSheetData(data: any, header?: any) {
    if (data) {
      const column = [...new Set(Object.keys(data).map((col: any) => {
        const returnData = data[col.replace(/\d+((.|,)\d+)?/, '2')]
        if (returnData) {
          if (!parseFloat(returnData['v'])) {
            return returnData['v']
          } else {
            let dateValue = new Date(returnData['v'])
            if (dateValue.toString() == 'Invalid Date') {
              const date = returnData['v'].split(/(.\d{2}\/)/)[0]
              const month = returnData['v'].split(/(.\d{2}\/)/)[1]?.replaceAll('/', '')
              const year = returnData['v'].split(' ')[0].split('/')[returnData['v'].split(' ')[0].split('/')?.length - 1]
              const time = returnData['v'].split(' ')[1]
              dateValue = new Date(`${year}-${month}-${date} ${time}`)
            }
            return dateValue.getTime()
          }
        }
      }))]?.filter((col: any) => !!col)
      const responseData = utils.sheet_to_json<any>(data, {
        header: header || column
      })?.slice(2);
      return responseData
    }
    return []
  }

  getSubject(): Observable<any> {
    return new Observable((observable) => {
      if (this.admissionsOfficeWorbook) {
        const subjectSetting = this.admissionsOfficeWorbook.Sheets[this.settingSubjectSheet]
        const data = this.decodeRawSheetData(subjectSetting)
        const response = {
          code: data?.length > 0 ? 200 : 404,
          data: data.sort((a, b) => a.id > b.id ? 1 : -1)
        }
        observable.next(response)
        observable.complete()
      }
    })
  }

  getSubjectTime(subjectId: any): Observable<any> {
    return new Observable((observable) => {
      const subject = this.admissionsOfficeWorbook.Sheets[subjectId]
      let response = {
        code: 404,
        data: <any>[]
      }
      if (subject) {
        const objectKey = <any>Object.keys(subject).
          filter((key) => /^[a-zA-Z]*2[a-zA-Z\\s-]*$/.test(key)).
          reduce((cur, key) => { return Object.assign(cur, { [key]: new Date(subject[key]['v']).toString() != 'Invalid Date' ? subject[key]['v'] : subject[key]['w'] }) }, {})
        const subjectArray = Object.keys(objectKey).map((item: any) => {
          let dateValue = new Date(objectKey[item])
          if (dateValue.toString() == 'Invalid Date') {
            const date = objectKey[item].split(/(.\d{2}\/)/)[0]
            const month = objectKey[item].split(/(.\d{2}\/)/)[1]?.replaceAll('/', '')
            const year = objectKey[item].split(' ')[0].split('/')[objectKey[item].split(' ')[0].split('/')?.length - 1]
            const time = objectKey[item].split(' ')[1]
            dateValue = new Date(`${year}-${month}-${date} ${time}`)
          }
          return dateValue.toString() != 'Invalid Date' ? dateValue.getTime() : undefined;
        })?.filter((item: any) => !!item)
        response = {
          code: subjectArray?.length > 0 ? 200 : 404,
          data: subjectArray
        }
      }
      observable.next(response)
      observable.complete()
    })
  }
}
