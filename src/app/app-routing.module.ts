import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'tim-kiem',
        component: SearchComponent
      },
      {
        path: 'tin-tuc',
        loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule)
      },
      {
        path: 'thong-bao',
        loadChildren: () => import('./pages/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'gioi-thieu',
        loadChildren: () => import('./pages/introduce/introduce.module').then((m) => m.IntroduceModule)
      },
      {
        path: 'dao-tao',
        loadChildren: () => import('./pages/train/train.module').then((m) => m.TrainModule)
      },
      {
        path: 'phong-tuyen-sinh',
        loadChildren: () => import('./pages/phong-tuyen-sinh/phong-tuyen-sinh.module').then((m) => m.PhongTuyenSinhModule);
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
