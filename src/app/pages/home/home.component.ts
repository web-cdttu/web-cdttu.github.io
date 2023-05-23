import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerData = <any>[]

  ngOnInit(): void {
    this.bannerData = [
      {
        image: 'https://lh3.googleusercontent.com/pw/AJFCJaX1HfnDWR9C9O5awLyd56jigeDj6r9STZ3IZqYZqQuFTWZVyVNQ7g-AtpHLOtT2_l5Ualpt0O52MP734xuYqsguIk2uG7BXizRVaXmh7K3ablXUQ69DVtKNY-Xp35DeofLuzCPKLdfAImiExIcDQn7gfUm2nWKFEF6REh3VhoLHcT1GmCbZEiZhgsU9UDTVbcCh1AGluN36lcvbaiEapZF2IIwwM--noBx-eLCnhZaIAIiMChfao9_fT3Y06En6_cPNwl6YiKwHAXIBEGLN2AdBxBBfqIjZhf4my7uUDRj_pMNaNunZMj3HltwdnStD8b1sqHo2RhyNGYcZDpj2r7QGDMT3N3eUaH7PmuAFng5ExN6SZ0XxvrFEGicZD8PvT-gbMjW9KNY3GU8mKPqLUVaDigzdERnSajIPAv-3PNIrJsFtFP8_-JK8wBH0Yzhhb951uZ1wPcHJFLFfTK0Zkbdh1MlapyiyfY54D4rjhdfgd5nW8P3vzZ7ILndWPvcDm6UcYORDLj92W65WR9R-wQUJQGO-Tqt5T_DpWmjEOZETpn0KtUE_AyzB9Mecd8Rh2L3ukwWqDWaFmzsZ-ekRmu67kRGLxWez_SreqJr7DjU94MjQl-aRnIjWTwPHdv0D0oUNNoPCfFcERld0KEKLTVXLaiyN9IX3xi9wsLPy-cS2DuU4pYa36CIIsRhb3nUtiRxDxNnwI4w8IdsdDUGUL_8EHJWVNP4FChsSC7aTay5paFi_gwQ-xf-m12gZ-4WFjhVlv7wVqAs5DL2VAlw_hQe7rn_qnu4mL0KFbU0W3jcfoh4LyR_i6LMfnSsYm8CgxwnAelbst1rJyWcEN1NGgcqvOfqh1DN478q7eeMT23E9cxAUZ84wnq96huSN3W-Vx1a6y5Ylop4k7MkcEoEDlIjgRQ=w1282-h961-s-no?authuser=0'
      },
      {
        image: 'https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-9/187851073_2620591208233639_8461803654191962694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=1Fbti2wHXkUAX866qfK&_nc_ht=scontent.fsgn13-4.fna&oh=00_AfAzGqvGR2zw6prfyLL7qNy_W9-pv37YXOtI8bFO5MRtbw&oe=64928F85'
      }
    ]
  }
}
