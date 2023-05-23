import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './pages/home/home.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { HomeIntroduceNewsComponent } from './pages/home/components/home-introduce-news/home-introduce-news.component';
import { HomeNewsNotificationsComponent } from './pages/home/components/home-news-notifications/home-news-notifications.component';
import { HomeListItemComponent } from './pages/home/components/home-list-item/home-list-item.component';
import { HomeSectionTitleComponent } from './pages/home/components/home-section-title/home-section-title.component';
import { HomeSlideComponent } from './pages/home/components/home-slide/home-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    SearchComponent,
    HomeIntroduceNewsComponent,
    HomeNewsNotificationsComponent,
    HomeListItemComponent,
    HomeSectionTitleComponent,
    HomeSlideComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    SwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
