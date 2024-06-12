import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiemDanhDetailsComponent } from './diem-danh-details.component';

describe('DiemDanhDetailsComponent', () => {
  let component: DiemDanhDetailsComponent;
  let fixture: ComponentFixture<DiemDanhDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiemDanhDetailsComponent]
    });
    fixture = TestBed.createComponent(DiemDanhDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
