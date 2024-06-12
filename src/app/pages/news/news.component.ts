import { Component } from '@angular/core';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  menu = MENU.find((item: any) => item.path == '/tin-tuc')?.children
}
