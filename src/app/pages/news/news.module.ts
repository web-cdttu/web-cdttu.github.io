import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { SafePipe } from 'src/app/shared/pipe/safe.pipe';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';


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
