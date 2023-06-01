import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucNangNhiemVuComponent } from './chuc-nang-nhiem-vu.component';

describe('ChucNangNhiemVuComponent', () => {
  let component: ChucNangNhiemVuComponent;
  let fixture: ComponentFixture<ChucNangNhiemVuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChucNangNhiemVuComponent]
    });
    fixture = TestBed.createComponent(ChucNangNhiemVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
