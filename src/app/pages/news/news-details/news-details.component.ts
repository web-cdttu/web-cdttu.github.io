import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsDetails: NewsModel = new NewsModel();
  slug: any;
  breadcrumb: any;
  newsRoute = <any>{}
  loadingNews = false;

  @ViewChild('googleDocContent') googleDocContent = ElementRef;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {
    this.loadingNews = true
  }

  ngOnInit(): void {
    this.loadingNews = true
    this.route.params.subscribe((query) => {
      if (query['slug']) {
        this.loadingNews = true
        this.slug = query['slug']
        this.getNewsList()
      }
    })
  }

  newsList = <any>[]

  getNewsList() {
    const newsList = Array.from(Array(14), (item, index) => {
      return null
    })
    this.newsList = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
    try {

      this.newsService.fetchAllNews()
        .subscribe((res: any) => {
          if (res.status === 200) {
            console.log(res.data);
            const newsList = res.data.sort((a: any, b: any) => a.date > b.date ? -1 : 1)
              .map((item: any) => {
                return {
                  id: item?.id,
                  title: item?.title,
                  googleDocPublishId: item?.googleDocPublishId,
                  slug: item?.slug,
                  date: item?.date,
                  path: `/tin-tuc/${item.slug}`,
                  image: `https://lh3.googleusercontent.com/fife/${item?.thumbnail}`
                }
              })
            this.newsList = newsList
            this.getNewsDetails()
          }
        })
    } catch (e) {
      console.log(e);
    }
  }

  getNewsDetails() {
    try {
      this.newsDetails = this.newsList.find((item: any) => item.slug === this.slug)
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
      const currentNewsIndex = this.newsService.newsData.indexOf(this.newsService.newsData.find((item: any) => item.id == this.newsDetails.id))
      this.newsRoute = {
        prev: currentNewsIndex > 0 ? this.newsService.newsData[currentNewsIndex - 1] : null,
        next: this.newsService.newsData[currentNewsIndex + 1]
      }
      this.loadingNews = false
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
