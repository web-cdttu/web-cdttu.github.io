import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceComponent } from './introduce.component';
import { DetailsComponent } from './details/details.component';
import { GioiThieuChungComponent } from './gioi-thieu-chung/gioi-thieu-chung.component';

const routes: Routes = [
  {
    path: '',
    component: IntroduceComponent,
    children: [
      {
        path: '',
        component: GioiThieuChungComponent
      },
      {
        path: ':type',
        component: DetailsComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroduceRoutingModule { }
