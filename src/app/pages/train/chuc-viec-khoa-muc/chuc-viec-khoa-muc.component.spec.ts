import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucViecKhoaMucComponent } from './chuc-viec-khoa-muc.component';

describe('ChucViecKhoaMucComponent', () => {
  let component: ChucViecKhoaMucComponent;
  let fixture: ComponentFixture<ChucViecKhoaMucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChucViecKhoaMucComponent]
    });
    fixture = TestBed.createComponent(ChucViecKhoaMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
