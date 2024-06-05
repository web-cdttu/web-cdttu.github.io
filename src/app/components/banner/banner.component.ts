import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import { SwiperComponent } from "swiper/angular";

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
