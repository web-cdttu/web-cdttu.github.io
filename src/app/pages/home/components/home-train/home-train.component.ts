import { Component } from '@angular/core';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-home-train',
  templateUrl: './home-train.component.html',
  styleUrls: ['./home-train.component.scss']
})
export class HomeTrainComponent {
  trains = MENU?.find((item: any) => item.path == '/dao-tao')?.children?.filter((item: any) => item.path !== 'tra-cuu-van-bang-bang-diem')
}
