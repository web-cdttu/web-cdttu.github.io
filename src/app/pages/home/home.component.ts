import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';
import { SettingsService } from 'src/app/shared/service/settings/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  bannerData = <any>[]
  homeSettingsData = <any>[]
  isActiveNews = false;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef,
    private settingsService: SettingsService
  ) {

  }

  ngOnInit(): void {
    this.bannerData = [
      {
        image: 'https://lh3.google.com/u/0/d/1OkbJzbuS8QG-1apeNmbDJMbeMQyTKpGh'
      },
      {
        image: 'https://lh3.google.com/u/0/d/14hx3HNmIHWI2KOfm8u4q-MUx2YE7WYwB'
      }
    ]
  }

  ngAfterViewChecked(): void {
    this.isActiveNews = this.newsService.isActiveNews
    if (!this.settingsService.isActivesettings || !this.homeSettingsData || this.homeSettingsData?.length == 0) {
      this.getAllSettings()
    }
    this.cd.detectChanges()
  }

  getAllSettings() {
    this.settingsService.getAllSettings()
      .subscribe((res: any) => {
        this.homeSettingsData = res.data?.filter((item: any) => !!item)
        if (res.data?.filter((item: any) => !!item && item?.module == 'topSlideShow')?.length > 0) {
          this.bannerData = res.data?.map((item: any) => {
            let image = ''
            if (item?.type == 'googleDrive') {
              image = `https://lh3.google.com/u/0/d/${item?.data}`
            }
            return {
              image: image
            }
          })?.concat(this.bannerData)
          console.log(this.homeSettingsData);
        }
      })
  }
}
