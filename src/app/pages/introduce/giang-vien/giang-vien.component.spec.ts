import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiangVienComponent } from './giang-vien.component';

describe('GiangVienComponent', () => {
  let component: GiangVienComponent;
  let fixture: ComponentFixture<GiangVienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiangVienComponent]
    });
    fixture = TestBed.createComponent(GiangVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
