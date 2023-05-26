import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';

@Component({
  selector: 'app-home-introduce-news',
  templateUrl: './home-introduce-news.component.html',
  styleUrls: ['./home-introduce-news.component.scss']
})
export class HomeIntroduceNewsComponent implements OnInit, AfterViewChecked {
  newsSlide = <any>[]
  newsList = <any>[]
  introduceContent: any;
  offsetHeight: any = 245;
  @ViewChild('newListContainer') newListContainer: any = ElementRef

  constructor(private cd: ChangeDetectorRef, private newsService: NewsService) {

  }

  ngOnInit(): void {
    this.getNewsList()
    this.getIntroduceContent()
  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges()
    if (this.newsService.isActiveNews && !this.newsList[0]?.title) {
      this.getNewsList()
    }
  }

  getIntroduceContent() {
    this.introduceContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
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
            this.newsList = newsList.splice(newsList?.length > 7 ? 7 : newsList.length / 2, 7)
            this.newsSlide = newsList.splice(0, 7)
            this.offsetHeight = this.newListContainer?.nativeElement?.offsetHeight
          }
        })
    } catch (e) {
      console.log(e);
    }
  }
}
