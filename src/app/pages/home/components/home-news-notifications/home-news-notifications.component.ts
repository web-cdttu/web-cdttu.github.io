import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-home-news-notifications',
  templateUrl: './home-news-notifications.component.html',
  styleUrls: ['./home-news-notifications.component.scss']
})
export class HomeNewsNotificationsComponent implements OnInit, AfterViewChecked {
  newsSlide = <any>[]
  newsList = <any>[]
  notificationList = <any>[]

  constructor(private cd: ChangeDetectorRef, private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.getNewsList()
    this.getNotificationList()
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    if (this.newsService.isActiveNews && !this.newsList[0]?.title) {
      this.getNewsList()
    }
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
            console.log(res.data);
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
            this.newsSlide = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
            this.newsList = newsList.splice(0, 7)
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  getNotificationList() {
    this.notificationList = Array.from(Array(14), (item, index) => {
      return null
    }).sort((a: any, b: any) => a?.date > b?.date ? -1 : 1)
    this.notificationList = this.notificationList.slice(0, 7)
  }

  getStyle(element: any) {
    return {
      height: element.offsetHeight
    }
  }
}
