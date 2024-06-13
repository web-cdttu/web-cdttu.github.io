import { AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdmissionsOfficeService } from 'src/app/shared/service/admissions-office/admissions-office.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-diem-danh',
  templateUrl: './diem-danh.component.html',
  styleUrls: ['./diem-danh.component.scss']
})
export class DiemDanhComponent implements OnInit {

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
  dataTable = <any>[]
  count = <any>[]
  addNew = <any>{}
  checkInSession = <any>{}
  subjectList = <any>[]
  checkInTimeList = <any>[]
  displayedColumns = <any>[]
  addmissionWorkbook: any;

  constructor(
    private cd: ChangeDetectorRef,
    private breakpointObserver: BreakpointObserver,
    private admissionsOfficeService: AdmissionsOfficeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
      this.activatedRoute.queryParams.subscribe((params: any) => {
        this.checkInSession['subject'] = params['mh'];
      });

      this.activatedRoute.queryParams.subscribe((params: any) => {
        this.checkInSession['time'] = decodeURIComponent(params['gh']);
    });

    this.fetchAddmissionData()
  }

  fetchAddmissionData() {
    this.admissionsOfficeService.fetchAddmissionData().subscribe({
      next: (res: any) => {
        this.addmissionWorkbook = res.data
        this.getSubject()
      },
      error(err) {
          console.log(err);          
      },
      complete: () => {
        console.info('complete');
      }
    })
  }
  getSubject() {
    try {
      this.admissionsOfficeService.getSubject()
        .subscribe((res: any) => {
          if (res.status == 200) {
            this.subjectList = res.data;
            if (this.subjectList.length == 1) {
              this.checkInSession['subject'] = this.subjectList[0]['id']
              this.getCheckInTimeList()
              this.updateUrl();
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
          if (res.status == 200) {
            this.checkInTimeList = res.data.reverse();
            if (this.checkInTimeList.length == 1) {
              this.checkInSession['time'] = this.checkInTimeList[0]
              this.updateUrl();
            } 
            if (this.checkInSession['time']){
              this.getStudentSettings()
            }
          } 
        }
      )
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
          if (res.status == 200) {
            this.studentSetingGetting = false
            const data = res.data
            this.studentSettings = data
            this.count = {
              checkedIn: this.studentSettings?.filter((item: any) => item?.checkedIn > 0)?.length,
              total: this.studentSettings?.length
            }
            this.displayedColumns = ['id', 'na', 'bi', 'checkedIn']
            this.dataSource = new MatTableDataSource(this.studentSettings)
            this.isShowTable = true
            this.updateUrl();
          }
        })
    } catch (error) {
      console.error(error);
      this.studentSetingGetting = false
    }
  }

  onChangeSubjectTab() {    
    this.getCheckInTimeList();
  }

  onChangeTimeTab(event: any) {    
    this.getStudentSettings()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.viewPortMode === 'desktop') {
      this.dataSource.filter = filterValue?.trim()?.toLowerCase();
    }
  }

  updateUrl(){
    this.router.navigate([], { queryParams: { mh: this.checkInSession['subject'], gh: this.checkInSession['time']}});
  }
}
