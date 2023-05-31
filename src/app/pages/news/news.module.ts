import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailsComponent,
    SafePipe,
    NewsListComponent,
    NewsListItemComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    BreadcrumbModule
  ]
})
export class NewsModule { }
