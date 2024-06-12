import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
    children: [
      {
        path: '',
        component: NotificationListComponent
      },
      {
        path: ':type',
        component: NotificationListComponent
      },
      {
        path: ':type/:id',
        component: NotificationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
