import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
  banner = <any>[
    {
      image: 'https://tudip.com/wp-content/uploads/2021/12/Code-Optimization-Techniques-in-Angular-website-1900x600.jpg'
    },
    {
      image: 'https://kinsta.com/wp-content/uploads/2017/05/how-to-optimize-images-for-web-and-performance-1200x675.jpg'
    }
  ]
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }
}
