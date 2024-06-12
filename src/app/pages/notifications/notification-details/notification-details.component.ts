import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit, AfterViewChecked {

  notificationDetails: NotificationModel = new NotificationModel();
  id: any;
  breadcrumb: any;
  notificationRoute = <any>{}
  loadingNotification = false;

  @ViewChild('googleDocContent') googleDocContent = ElementRef;

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.loadingNotification = true
  }

  ngOnInit(): void {
    this.loadingNotification = true
    this.route.params.subscribe((query) => {
      if (query['id']) {
        this.loadingNotification = true
        this.id = query['id']
        this.getNotificationDetails()
      }
    })
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.notificationService.isActiveNotification && !this.notificationDetails?.id) {
        this.route.params.subscribe((query) => {
          if (query['id']) {
            this.id = query['id']
          }
        })
        this.getNotificationDetails()
      }
    })
  }

  getNotificationDetails() {
    try {
      this.notificationService.getNotificationById(this.id)
        .subscribe((res: any) => {
          if (res.code === 200) {
            this.notificationDetails = res.data
            this.breadcrumb = [
              {
                path: '/thong-bao',
                label: 'THÔNG BÁO'
              },
              {
                path: location.pathname,
                label: this.notificationDetails?.title
              }
            ]
            this.loadingNotification = false
          }
        })
    } catch (e) {
      console.log(e);
    }
  }
}
class NotificationModel {
  id?: any;
  date?: any;
  title?: any;
  slug?: any;
  content?: any;
  googleDocPublishId?: any;
  thumbnail?: any;
  url: any;
}
