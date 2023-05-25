import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, AfterViewChecked {

  newsDetails: NewsModel = new NewsModel();
  slug: any;
  breadcrumb: any;

  @ViewChild('googleDocContent') googleDocContent = ElementRef;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((query) => {
      if (query['slug']) {
        this.slug = query['slug']
      }
    })
    this.getNewsDetails()
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    setTimeout(() => {
      if (this.newsService.isActiveNews && !this.newsDetails?.slug) {
        this.route.params.subscribe((query) => {
          if (query['slug']) {
            this.slug = query['slug']
          }
        })
        this.getNewsDetails()
      }
    })
  }

  getNewsDetails() {
    try {
      this.newsService.getNewsBySlug(this.slug)
        .subscribe((res: any) => {
          if (res.code === 200) {
            this.newsDetails = res.data
            this.breadcrumb = [
              {
                path: '/tin-tuc',
                label: 'TIN TỨC'
              },
              {
                path: `/tin-tuc/${this.newsDetails?.slug}`,
                label: this.newsDetails?.title
              }
            ]
          }
        })
    } catch (e) {
      console.log(e);
    }
  }
}
class NewsModel {
  id?: any;
  date?: any;
  title?: any;
  slug?: any;
  content?: any;
  googleDocPublishId?: any;
  thumbnail?: any;
  url: any;
}
