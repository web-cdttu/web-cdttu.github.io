import { Component } from '@angular/core';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent {
  menu = MENU.find((item: any) => item.path == '/dao-tao')?.children
}
