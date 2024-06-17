import { Component } from '@angular/core';
import { MENU } from 'src/app/shared/constant/menu.constant';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent {
  menu = MENU.find((item: any) => item.path == '/gioi-thieu')?.children?.filter((item: any) => item.path != 'gioi-thieu-chung')
}
