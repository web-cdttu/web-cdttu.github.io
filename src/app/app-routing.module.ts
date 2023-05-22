import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';

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
        path: 'tin-tuc',
        component: HomeComponent
      },
      {
        path: 'thong-bao',
        component: HomeComponent
      },
      {
        path: 'gioi-thieu',
        component: HomeComponent
      },
      {
        path: 'dao-tao',
        component: HomeComponent
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
