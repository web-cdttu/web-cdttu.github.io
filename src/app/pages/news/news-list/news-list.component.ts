import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList = <any>[];
  breadcrumb = <any>[];

  constructor(private newsService: NewsService, private cd: ChangeDetectorRef) {
    if (location.pathname.includes('su-kien')) {
      this.breadcrumb = [
        {
          path: 'tin-tuc/su-kien',
          label: 'SỰ KIỆN'
        }
      ]
    } else {
      this.breadcrumb = [
        {
          path: '',
          label: 'TIN TỨC'
        }
      ]
    }
  }

  ngOnInit(): void {
    this.getNewsList()
  }

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
                  slug: item?.slug,
                  date: item?.date,
                  path: `/tin-tuc/${item.slug}`,
                  image: `https://lh3.googleusercontent.com/fife/${item?.thumbnail}`
                }
              })
            this.newsList = newsList
          }
        })
    } catch (e) {
      console.log(e);
    }
  }
}
