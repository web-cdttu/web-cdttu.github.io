import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news-notifications',
  templateUrl: './home-news-notifications.component.html',
  styleUrls: ['./home-news-notifications.component.scss']
})
export class HomeNewsNotificationsComponent implements OnInit, AfterViewInit {
  newsSlide = <any>[]
  newsList = <any>[]
  notificationList = <any>[]

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.getNewsList()
    this.getNotificationList()
  }

  ngAfterViewInit(): void {
    this.cd.detectChanges()
  }

  getNewsList() {
    const newsList = Array.from(Array(14), (item, index) => {
      return {
        path: 'tin-tuc',
        date: new Date().setMonth(new Date().getMonth() - index),
        label: `${index} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        image: index % 2 == 1 ? 'https://lh3.googleusercontent.com/pw/AJFCJaX1HfnDWR9C9O5awLyd56jigeDj6r9STZ3IZqYZqQuFTWZVyVNQ7g-AtpHLOtT2_l5Ualpt0O52MP734xuYqsguIk2uG7BXizRVaXmh7K3ablXUQ69DVtKNY-Xp35DeofLuzCPKLdfAImiExIcDQn7gfUm2nWKFEF6REh3VhoLHcT1GmCbZEiZhgsU9UDTVbcCh1AGluN36lcvbaiEapZF2IIwwM--noBx-eLCnhZaIAIiMChfao9_fT3Y06En6_cPNwl6YiKwHAXIBEGLN2AdBxBBfqIjZhf4my7uUDRj_pMNaNunZMj3HltwdnStD8b1sqHo2RhyNGYcZDpj2r7QGDMT3N3eUaH7PmuAFng5ExN6SZ0XxvrFEGicZD8PvT-gbMjW9KNY3GU8mKPqLUVaDigzdERnSajIPAv-3PNIrJsFtFP8_-JK8wBH0Yzhhb951uZ1wPcHJFLFfTK0Zkbdh1MlapyiyfY54D4rjhdfgd5nW8P3vzZ7ILndWPvcDm6UcYORDLj92W65WR9R-wQUJQGO-Tqt5T_DpWmjEOZETpn0KtUE_AyzB9Mecd8Rh2L3ukwWqDWaFmzsZ-ekRmu67kRGLxWez_SreqJr7DjU94MjQl-aRnIjWTwPHdv0D0oUNNoPCfFcERld0KEKLTVXLaiyN9IX3xi9wsLPy-cS2DuU4pYa36CIIsRhb3nUtiRxDxNnwI4w8IdsdDUGUL_8EHJWVNP4FChsSC7aTay5paFi_gwQ-xf-m12gZ-4WFjhVlv7wVqAs5DL2VAlw_hQe7rn_qnu4mL0KFbU0W3jcfoh4LyR_i6LMfnSsYm8CgxwnAelbst1rJyWcEN1NGgcqvOfqh1DN478q7eeMT23E9cxAUZ84wnq96huSN3W-Vx1a6y5Ylop4k7MkcEoEDlIjgRQ=w1282-h961-s-no?authuser=0' : 'https://content.wepik.com/statics/5048657/preview-page0.jpg'
      }
    }).sort((a, b) => a.date > b.date ? -1 : 1)
    this.newsSlide = newsList.splice(7, 7)
    this.newsList = newsList.splice(0, 7)
  }

  getNotificationList() {
    this.notificationList = Array.from(Array(14), (item, index) => {
      return {
        path: 'thong-bao',
        date: new Date().setMonth(new Date().getMonth() - index),
        label: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
      }
    }).sort((a, b) => a.date > b.date ? -1 : 1)
    this.notificationList = this.notificationList.slice(0, 7)
  }

  getStyle(element: any) {
    return {
      height: element.offsetHeight
    }
  }
}
