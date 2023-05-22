import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
// import Swiper core and required modules
import SwiperCore, { Swiper, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Virtual]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() banner = <any>[]
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
