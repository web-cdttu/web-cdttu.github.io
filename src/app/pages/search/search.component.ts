import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MENU } from 'src/app/shared/constant/menu.constant';
import { SETTING } from 'src/app/shared/constant/settings.constant';
import { CommonService } from 'src/app/shared/service/commonService/common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  menu = MENU
  searchText = ''

  constructor(private commonService: CommonService, private title: Title) {
  }
  ngOnInit(): void {
    if (window.history.state.searchText) {
      this.searchText = ''
      this.searchText = window.history.state.searchText
    }
    this.search()
    this.title.setTitle(`Tìm kiếm | ${SETTING.siteName}`)
  }

  search() {
    this.searchMenu()
  }

  searchMenu() {
    this.menu = MENU.filter((item: any) => {
      return this.commonService.generatedSlug(this.searchText)?.split('-')
        .every((x) => {
          return this.commonService.generatedSlug(item.label)?.includes(x) || this.commonService.generatedSlug(item.path)?.includes(x)
        })
    })?.map((item: any) => {
      return {
        path: item.path,
        label: item.label
      }
    })
    if (this.menu.length == 0) {
      this.menu = MENU.filter((item: any) => {
        return this.commonService.generatedSlug(this.searchText)?.split('-')
          .every((x) => {
            return item.children?.filter((ch: any) => {
              return this.commonService.generatedSlug(ch.label)?.includes(x) || this.commonService.generatedSlug(ch.path)?.includes(x)
            })?.length > 0
          })
      })
      if (this.menu.length > 0) {
        this.menu = MENU.map((item: any) => {
          const object = <any>{}
          const children = item.children?.filter((ch: any) => {
            return this.commonService.generatedSlug(ch.label)?.includes(this.commonService.generatedSlug(this.searchText) || '')
          })
          if (children?.length > 0) {
            object['path'] = item.path
            object['label'] = item.label
            object['children'] = children
            return object
          }
        }).filter((item: any) => !!item)
      }
    }
    console.log(this.menu);
  }
}
