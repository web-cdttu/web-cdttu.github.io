import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';

@Component({
  selector: 'app-home-news-notifications',
  templateUrl: './home-news-notifications.component.html',
  styleUrls: ['./home-news-notifications.component.scss']
})
export class HomeNewsNotificationsComponent implements OnInit, AfterViewChecked {
  newsSlide = <any>[]
  newsList = <any>[]
  notificationList = <any>[]
  offsetHeight: any = 245;
  @ViewChild('newListContainer') newListContainer: any = ElementRef

  constructor(
    private cd: ChangeDetectorRef,
    private newsService: NewsService,
    private notificationService: NotificationService
    ) {

  }

  ngOnInit(): void {
    this.getNewsList()
    this.getNotificationList()
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.newsService.isActiveNews && !this.newsList[0]?.title) {
        this.getNewsList()
      }
      if (this.notificationService.isActiveNotification && !this.notificationList[0]?.title) {
        this.getNotificationList()
      }
    })
  }

  getNewsList() {
    const newsList = Array.from(Array(14), (item, index) => {
      return null
    })
    this.newsList = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
    this.newsSlide = newsList.splice(0, 7)
    try {
      this.newsService.getAllNews()
        .subscribe((res: any) => {
          if (res.code === 200) {
            const newsList = res.data.sort((a: any, b: any) => a.date > b.date ? -1 : 1)
              .map((item: any) => {
                return {
                  id: item?.id,
                  title: item?.title,
                  date: item?.date,
                  path: `/tin-tuc/${item.slug}`,
                  image: item.thumbnail
                }
              })
              if (newsList.length > 7) {
                this.newsSlide = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
                this.newsList = newsList.splice(0, 7)
              } else {
                this.newsSlide = newsList
                this.newsList = newsList
              }
            this.offsetHeight = this.newListContainer?.nativeElement?.offsetHeight
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  getNotificationList() {
    const notificationList = Array.from(Array(14), (item, index) => {
      return null
    })
    this.notificationList = notificationList.splice(notificationList?.length > 7 ? 7 : notificationList.length / 2, 7)
    try {
      this.notificationService.getAllNotification()
        .subscribe((res: any) => {
          if (res.code === 200) {
            const notificationList = res.data.sort((a: any, b: any) => a.data.date > b.data.date ? -1 : 1)
              .map((item: any) => {
                return {
                  id: item?.data?.id,
                  title: `${item?.data?.id} | ${item?.data?.title}`,
                  date: item?.data?.date,
                  path: `/thong-bao/${item?.slug}/${item?.data?.id}`,
                  image: item?.data.thumbnail
                }
              })
            if (notificationList?.length > 7) {
              this.notificationList = notificationList.splice(0, 7)
            } else {
              this.notificationList = notificationList
            }
            this.offsetHeight = this.newListContainer?.nativeElement?.offsetHeight
          }
        })
    } catch (e) {
      console.log(e);
    }
  }
}
