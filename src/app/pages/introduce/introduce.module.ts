import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceRoutingModule } from './introduce-routing.module';
import { IntroduceComponent } from './introduce.component';
import { DetailsComponent } from './details/details.component';
import { BreadcrumbModule } from 'src/app/components/breadcrumb/breadcrumb.module';
import { LuocSuComponent } from './luoc-su/luoc-su.component';
import { ChucNangNhiemVuComponent } from './chuc-nang-nhiem-vu/chuc-nang-nhiem-vu.component';
import { CacPhongBanChucNangComponent } from './cac-phong-ban-chuc-nang/cac-phong-ban-chuc-nang.component';
import { VienTruongComponent } from './vien-truong/vien-truong.component';
import { GiangVienComponent } from './giang-vien/giang-vien.component';
import { QuyCheComponent } from './quy-che/quy-che.component';
import { GioiThieuChungComponent } from './gioi-thieu-chung/gioi-thieu-chung.component';
import { SafePipe } from './pipe/safe.pipe';


@NgModule({
  declarations: [
    IntroduceComponent,
    DetailsComponent,
    LuocSuComponent,
    ChucNangNhiemVuComponent,
    CacPhongBanChucNangComponent,
    VienTruongComponent,
    GiangVienComponent,
    QuyCheComponent,
    GioiThieuChungComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    IntroduceRoutingModule,
    BreadcrumbModule
  ]
})
export class IntroduceModule { }
