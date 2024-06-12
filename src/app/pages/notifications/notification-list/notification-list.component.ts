import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MENU } from 'src/app/shared/constant/menu.constant';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit, AfterViewChecked {
  breadcrumb: any;
  notificationList = <any>[];
  type: any;
  title: any;

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getNotificationList()
    this.route.params.subscribe((query) => {
      if (query['type']) {
        this.type = query['type']
        this.title = MENU.find((item: any) => item.path == '/thong-bao')?.children.find((item: any) => item.path == this.type).label
        if (this.title) {
          this.breadcrumb = [
            {
              path: 'thong-bao',
              label: 'THÔNG BÁO'
            },
            {
              path: 'thong-bao/' + this.type,
              label: this.title
            }
          ]
        } else {
          this.breadcrumb = [
            {
              path: 'thong-bao',
              label: 'THÔNG BÁO'
            }
          ]
        }
        this.getNotificationList()
      } else {
        this.breadcrumb = [
          {
            path: 'thong-bao',
            label: 'THÔNG BÁO'
          }
        ]
        this.getNotificationList()
      }
    })
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.notificationService.isActiveNotification && !this.notificationList[0]?.title) {
        this.getNotificationList()
      }
    })
  }

  getNotificationList() {
    const notificationList = Array.from(Array(14), (item, index) => {
      return null
    })
    this.notificationList = notificationList.splice(notificationList?.length > 7 ? 7 : notificationList.length / 2, 7)
    try {
      if (this.type) {
        const notificationKey = `notification${this.type.split('-').map((item: any) => item.charAt(0).toUpperCase() + item.slice(1)).toString('').replaceAll(',', '')}`
        const notificationList = this.notificationService.notificationData[notificationKey]?.sort((a: any, b: any) => (a?.data?.date > b?.data?.date) || (a?.date > b?.date) ? -1 : 1)
          .map((item: any) => {
            return {
              id: item?.id,
              title: `${item?.id} | ${item?.title}`,
              date: item?.date,
              path: `/thong-bao/${this.type}/${item?.id}`,
              image: item?.thumbnail
            }
          })
        if (notificationList?.length > 0) {
          this.notificationList = notificationList
        }
      } else {
        this.notificationService.getAllNotification()
          .subscribe((res: any) => {
            if (res.code === 200) {
              const notificationList = res.data?.sort((a: any, b: any) => a.data.date > b.data.date ? -1 : 1)
                .map((item: any) => {
                  return {
                    id: item?.data?.id,
                    title: `${item?.data?.id} | ${item?.data?.title}`,
                    date: item?.data?.date,
                    path: `/thong-bao/${item?.slug}/${item?.data?.id}`,
                    image: item?.data?.thumbnail
                  }
                })
              this.notificationList = notificationList
            }
          })
      }
    } catch (e) {
      console.log(e);
    }
  }

}
