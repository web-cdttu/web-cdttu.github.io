import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  bannerData = <any>[]
  isActiveNews = false;

  constructor(private newsService: NewsService, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.bannerData = [
      {
        image: 'https://topmienphi.info/wp-content/uploads/2022/02/274258507_5572632262750875_2265852061964656842_n.jpg'
      },
      {
        image: 'https://topmienphi.info/wp-content/uploads/2022/02/274258507_5572632262750875_2265852061964656842_n.jpg'
      }
    ]
  }

  ngAfterViewChecked(): void {
    this.isActiveNews = this.newsService.isActiveNews
    this.cd.detectChanges()
  }
}
