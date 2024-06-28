// import { Component } from '@angular/core';
import { SettingsService } from 'src/app/shared/service/settings/settings.service';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gioi-thieu-chung',
  templateUrl: './gioi-thieu-chung.component.html',
  styleUrl: './gioi-thieu-chung.component.scss'
})
export class GioiThieuChungComponent implements OnInit, AfterViewChecked {
  introduceSettings =<any>[];
  video: any;

  
  constructor(
    private settingsService: SettingsService,
    private cd: ChangeDetectorRef,

  ) {

   }
  ngOnInit(): void {
    this.ngAfterViewChecked();
  }

  ngAfterViewChecked(): void {
    if (!this.settingsService.isActivesettings || !this.introduceSettings || this.introduceSettings?.length == 0) {
      this.getAllIntroduce()
    }
    this.cd.detectChanges()
  }

  getAllIntroduce() {
    this.settingsService.getIntroduceSettings()
      .subscribe((res: any) => {
        this.introduceSettings = res.data?.filter((item: any) => !!item)
        if (res.data?.filter((item: any) => !!item && item?.module == 'introduce')?.length > 0) {
          this.video = res.data?.map((item: any) => {
            let video = ''
            if (item?.type == 'youtube') {
              video = `https://www.youtube.com/embed/${item?.data}`
            }
            return video;
            
          })?.concat(this.video)
          console.log(this.video);
        }
      })
  }

}
