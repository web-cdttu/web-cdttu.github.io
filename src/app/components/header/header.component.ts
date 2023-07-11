import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isShowMenu = false;
  navbar = MENU
  activePath = '';
  activePathIndex = 0;
  searchText = '';
  isShowAccountMenu = false

  @ViewChild('accountMenuTrigger') accountMenuTrigger?: ElementRef;

  @HostListener('document:click', ['$event'])
  onClick(event: any) {
    if (this.accountMenuTrigger) {
      if (this.accountMenuTrigger.nativeElement.contains(event.target)) {
        this.isShowAccountMenu = !this.isShowAccountMenu
      } else {
        this.isShowAccountMenu = false
      }
    } else {
      this.isShowAccountMenu = false
    }
  }

  constructor(private router: Router, private eRef: ElementRef) {
    this.router.events.subscribe((res: any) => {
      this.activePath = res?.routerEvent?.url
      this.searchText = ''
      const foundIndex = this.navbar.indexOf(this.navbar.find((item: any) => item.path == '/' + res?.routerEvent?.url?.split('/')[1]))
      this.activePathIndex =  foundIndex > 0 ? foundIndex : 0
    })
  }

  search() {
    if (this.searchText) {
      this.isShowMenu = false
      this.router.navigate(['/tim-kiem'], {
        state: { searchText: this.searchText }
      })
    }
  }
}
