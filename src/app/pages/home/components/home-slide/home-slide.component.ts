import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home-slide.component.scss']
})
export class HomeSlideComponent {
  @Input() slide = <any>[]
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext() {
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(100);
  }
}
