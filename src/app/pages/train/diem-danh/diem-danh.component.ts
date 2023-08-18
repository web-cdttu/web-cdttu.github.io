import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdmissionsOfficeService } from 'src/app/shared/service/admissions-office/admissions-office.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-diem-danh',
  templateUrl: './diem-danh.component.html',
  styleUrls: ['./diem-danh.component.scss']
})
export class DiemDanhComponent implements OnInit, AfterViewChecked {

  durationInSeconds = 3;
  journeyUser: any = null;
  studentSetingGetting = false
  isShowTable = false
  @ViewChild('welcomeDialog') welcomeDialog!: any;
  @ViewChild('confirmDeleteDialog') confirmDeleteDialog!: any;
  @ViewChild('syncDataDialog') syncDataDialog!: any;
  @ViewChild('addNewDialog') addNewDialog!: any;
  welcomeDialogRef: any
  confirmDeleteDialogRef: any
  welcomeIcon: any
  timeout = 3000
  viewPortMode: any;
  studentSettings = <any>[]
  dataSource = <any>[]
  count = <any>[]
  addNew = <any>{}
  checkInSession = <any>{}
  subjectList = <any>[]
  checkInTimeList = <any>[]
  displayedColumns = <any>[]

  constructor(
    private cd: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private admissionsOfficeService: AdmissionsOfficeService,
  ) {
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.viewPortMode = 'mobile';
        } else {
          this.viewPortMode = 'desktop';
        }
      });
    this.getSubject()
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.admissionsOfficeService.isActiveAdmissionOffice && !this.subjectList[0]?.id) {
        this.getSubject()
      }
    })
  }

  getSubject() {
    try {
      this.admissionsOfficeService.getSubject()
        .subscribe((res: any) => {
          if (res.code == 200) {
            this.subjectList = res.data;
            const localStorageAttendance = JSON.parse(localStorage.getItem('attendance') || '[]')?.map((item: any) => {
              return {
                id: item?.subject,
                na: item?.name
              }
            })
            const mergeSubject = [...new Set(localStorageAttendance.map((item: any) => item.id).concat(this.subjectList.map((item: any) => item.id)))]
            mergeSubject.forEach((item: any) => {
              const foundRemote = this.subjectList.find((sl: any) => sl.id == item)
              if (!foundRemote) {
                const foundLocal = localStorageAttendance.find((sl: any) => sl.id == item)
                if (foundLocal) {
                  this.subjectList.push(foundLocal)
                }
              }
            })
            if (this.subjectList.length == 1) {
              this.checkInSession['subject'] = this.subjectList[0]['id']
              this.getCheckInTimeList()
            }
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  getCheckInTimeList() {
    try {
      this.checkInTimeList = []
      this.admissionsOfficeService.getSubjectTime(this.checkInSession['subject'])
        .subscribe((res: any) => {
          if (res.code == 200) {
            this.checkInTimeList = res.data;
            if (this.checkInTimeList.length == 1) {
              this.checkInSession['time'] = this.checkInTimeList[0]
              this.getStudentSettings()
            }
          } else {
            const localStorageAttendance = JSON.parse(localStorage.getItem('attendance') || '[]')
            const currentSubject = localStorageAttendance.find((item: any) => item.subject == this.checkInSession.subject)
            if (currentSubject) {
              this.checkInTimeList = Object.keys(currentSubject)?.filter((item: any) => item !== 'subject' && item !== 'name')
              if (this.checkInTimeList.length == 1) {
                this.checkInSession['time'] = this.checkInTimeList[0]
                this.getStudentSettings()
              }
            }
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  getStudentSettings() {
    this.studentSetingGetting = true
    this.isShowTable = false
    try {
      const request = <any>{}
      if (this.checkInSession['subject'] && this.checkInSession['time']) {
        request['subject'] = this.checkInSession['subject']
        request['time'] = this.checkInSession['time']
      }
      this.admissionsOfficeService.getStudentSettings(request)
        .subscribe((res: any) => {
          if (res.code == 200) {
            this.studentSetingGetting = false
            const data = res.data
            const localStorageAttendance = JSON.parse(localStorage.getItem('attendance') || '[]')
            const foundSubject = localStorageAttendance.find((item: any) => item.subject == this.checkInSession['subject'])
            if (foundSubject) {
              const foundAttendance = foundSubject[this.checkInSession['time']]
              if (foundAttendance?.length > 0) {
                foundAttendance.forEach((fa: any) => {
                  const foundIndex = data.indexOf(data.find((item: any) => item.id == fa.id))
                  data[foundIndex]['checkedIn'] = fa.checkedIn
                })
              }
            }
            this.studentSettings = data
            this.count = {
              checkedIn: this.studentSettings?.filter((item: any) => item?.checkedIn > 0)?.length,
              total: this.studentSettings?.length
            }
            this.displayedColumns = ['id', 'na', 'bi', 'checkedIn']
            this.dataSource = new MatTableDataSource(this.studentSettings)
            this.isShowTable = true
          }
        })
    } catch (error) {
      console.error(error);
      this.studentSetingGetting = false
    }
  }

  onChangeSubjectTab(event: any) {
    this.checkInSession['subject'] = this.subjectList[event.index]['id']
    this.getCheckInTimeList()
  }

  onChangeTimeTab(event: any) {
    this.checkInSession['time'] = this.checkInTimeList[event.index]
    this.getStudentSettings()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue?.trim()?.toLowerCase();
  }
}
