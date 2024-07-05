// import { Component } from '@angular/core';
import { SettingsService } from 'src/app/shared/service/settings/settings.service';
import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-gioi-thieu-chung',
  templateUrl: './gioi-thieu-chung.component.html',
  styleUrl: './gioi-thieu-chung.component.scss'
})
export class GioiThieuChungComponent implements OnInit {
  introduceSettings =<any>[];
  video: any;

  
  constructor(
    private settingsService: SettingsService,
    private cd: ChangeDetectorRef,

  ) {

   }
  ngOnInit(): void {
    this.getAllIntroduce()
  }

  getAllIntroduce() {
    this.settingsService.fetchsettingsData().subscribe((res: any) => {
      if(res.status == 200) {
        this.video = `https://www.youtube.com/embed/${res.introduce[0].data}`
      }
    })
  }
}
