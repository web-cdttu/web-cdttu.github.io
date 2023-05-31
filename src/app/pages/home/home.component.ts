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
        image: 'https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/242217600_1629658417237367_7562078524557990886_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=QKkJRyNdd50AX80SAFt&_nc_ht=scontent.fsgn4-1.fna&oh=00_AfDQfL5OJ9_0njolKL8sJmpPNUofpJI_A8lEWSiKVIhvQg&oe=647BABE9'
      },
      {
        image: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/187851073_2620591208233639_8461803654191962694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=1Fbti2wHXkUAX866qfK&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAzGqvGR2zw6prfyLL7qNy_W9-pv37YXOtI8bFO5MRtbw&oe=64928F85'
      }
    ]
  }

  ngAfterViewChecked(): void {
    this.isActiveNews = this.newsService.isActiveNews
    this.cd.detectChanges()
  }
}
