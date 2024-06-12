import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { BreadcrumbModule } from "../../components/breadcrumb/breadcrumb.module";
import { NofiticationListItemComponent } from './components/notification-list-item/notification-list-item.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationListComponent,
    SafePipe,
    NofiticationListItemComponent,
    NotificationDetailsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    BreadcrumbModule
  ]
})
export class NotificationsModule { }
