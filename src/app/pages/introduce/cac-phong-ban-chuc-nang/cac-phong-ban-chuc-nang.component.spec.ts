import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacPhongBanChucNangComponent } from './cac-phong-ban-chuc-nang.component';

describe('CacPhongBanChucNangComponent', () => {
  let component: CacPhongBanChucNangComponent;
  let fixture: ComponentFixture<CacPhongBanChucNangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CacPhongBanChucNangComponent]
    });
    fixture = TestBed.createComponent(CacPhongBanChucNangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
