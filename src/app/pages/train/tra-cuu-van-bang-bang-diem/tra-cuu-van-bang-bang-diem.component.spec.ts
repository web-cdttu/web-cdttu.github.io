import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraCuuVanBangBangDiemComponent } from './tra-cuu-van-bang-bang-diem.component';

describe('TraCuuVanBangBangDiemComponent', () => {
  let component: TraCuuVanBangBangDiemComponent;
  let fixture: ComponentFixture<TraCuuVanBangBangDiemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraCuuVanBangBangDiemComponent]
    });
    fixture = TestBed.createComponent(TraCuuVanBangBangDiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
