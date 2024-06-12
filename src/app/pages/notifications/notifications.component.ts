import { Component } from '@angular/core';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  menu = MENU.find((item: any) => item.path == '/thong-bao')?.children
}
