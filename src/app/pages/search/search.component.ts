import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { Router } from '@angular/router';
import { MENU } from 'src/app/shared/constant/menu.constant';
import { SETTING } from 'src/app/shared/constant/settings.constant';
import { CommonService } from 'src/app/shared/service/commonService/common.service';
import { NewsService } from 'src/app/shared/service/news/news.service';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewChecked {
  menu = MENU
  searchText = ''
  newsList = <any>[]
  foundNews = <any>[]
  notificationList = <any>[]
  foundNotifications = <any>[]

  constructor(
    private commonService: CommonService,
    private title: Title,
    private cd: ChangeDetectorRef,
    private newsService: NewsService,
    private notificationService: NotificationService,
  ) {
  }

  ngOnInit(): void {
    if (window.history.state.searchText) {
      this.searchText = ''
      this.searchText = window.history.state.searchText
    }
    this.search()
    this.title.setTitle(`Tìm kiếm | ${SETTING.siteName}`)
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.newsService.isActiveNews && !this.newsList[0]?.title) {
        this.getNewsList()
      }
    })
    setTimeout(() => {
      if (this.notificationService.isActiveNotification && !this.notificationList[0]?.title) {
        this.getNotificationList()
      }
    })
  }

  search() {
    this.searchMenu()
    this.searchNews()
    this.searchNotification()
  }

  searchMenu() {
    this.menu = MENU.filter((item: any) => {
      return this.commonService.generatedSlug(this.searchText)?.split('-')
        .every((x) => {
          return this.commonService.generatedSlug(item.label)?.includes(x) || this.commonService.generatedSlug(item.path)?.includes(x)
        })
    })?.map((item: any) => {
      return {
        path: item.path,
        label: item.label
      }
    })
    if (this.menu.length == 0) {
      this.menu = MENU.filter((item: any) => {
        return this.commonService.generatedSlug(this.searchText)?.split('-')
          .every((x) => {
            return item.children?.filter((ch: any) => {
              return this.commonService.generatedSlug(ch.label)?.includes(x) || this.commonService.generatedSlug(ch.path)?.includes(x)
            })?.length > 0
          })
      })
      if (this.menu.length > 0) {
        this.menu = MENU.map((item: any) => {
          const object = <any>{}
          const children = item.children?.filter((ch: any) => {
            return this.commonService.generatedSlug(ch.label)?.includes(this.commonService.generatedSlug(this.searchText) || '')
          })
          if (children?.length > 0) {
            object['path'] = item.path
            object['label'] = item.label
            object['children'] = children
            return object
          }
        }).filter((item: any) => !!item)
      }
    }
  }

  getNewsList() {
    const newsList = Array.from(Array(14), (item, index) => {
      return null
    })
    this.newsList = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
    try {
      this.newsService.getAllNews()
        .subscribe((res: any) => {
          if (res.code === 200) {
            const newsList = res.data.sort((a: any, b: any) => a.date > b.date ? -1 : 1)
              .map((item: any) => {
                return {
                  id: item?.id,
                  title: item?.title,
                  slug: item?.slug,
                  date: item?.date,
                  path: `/tin-tuc/${item.slug}`,
                  image: item.thumbnail
                }
              })
            this.newsList = newsList
            if (this.searchText?.length > 0) {
              this.searchNews()
            }
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
            if (this.notificationList.length > 0) {
              this.searchNotification();
            }
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  searchNews() {
    if (this.newsList?.length > 0) {
      this.foundNews = this.newsList?.filter((ch: any) => {
        return this.commonService.generatedSlug(this.searchText)?.split('-')
          .every((x) => {
            return this.commonService.generatedSlug(ch.slug)?.includes(x) || this.commonService.generatedSlug(ch.title)?.includes(x) || this.commonService.generatedSlug(ch.path)?.includes(x)
          })
      })
    }
  }

  searchNotification() {
    if (this.notificationList?.length > 0) {      
      this.foundNotifications = this.notificationList?.filter((ch: any) => {
        return this.commonService.generatedSlug(this.searchText)?.split('-')
          .every((x) => {
            return this.commonService.generatedSlug(ch.date)?.includes(x) || this.commonService.generatedSlug(ch.title)?.includes(x) || this.commonService.generatedSlug(ch.path)?.includes(x) || this.commonService.generatedSlug(ch.id)?.includes(x)
          })
      })      
    }
  }
}
