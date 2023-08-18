import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainRoutingModule } from './train-routing.module';
import { TrainComponent } from './train.component';
import { DetailsComponent } from './details/details.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { TuSiKhoaMucComponent } from './tu-si-khoa-muc/tu-si-khoa-muc.component';
import { ChucViecKhoaMucComponent } from './chuc-viec-khoa-muc/chuc-viec-khoa-muc.component';
import { ChucSacKhoaMucComponent } from './chuc-sac-khoa-muc/chuc-sac-khoa-muc.component';
import { TraCuuVanBangBangDiemComponent } from './tra-cuu-van-bang-bang-diem/tra-cuu-van-bang-bang-diem.component';
import { DiemDanhComponent } from './diem-danh/diem-danh.component';
import { DiemDanhDetailsComponent } from './diem-danh/diem-danh-details/diem-danh-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TrainComponent,
    DetailsComponent,
    TuSiKhoaMucComponent,
    ChucViecKhoaMucComponent,
    ChucSacKhoaMucComponent,
    TraCuuVanBangBangDiemComponent,
    DiemDanhComponent,
    DiemDanhDetailsComponent
  ],
  imports: [
    CommonModule,
    TrainRoutingModule,
    BreadcrumbModule,
    MatTabsModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ]
})
export class TrainModule { }
