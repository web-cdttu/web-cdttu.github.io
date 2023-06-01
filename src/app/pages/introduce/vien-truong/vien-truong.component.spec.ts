import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VienTruongComponent } from './vien-truong.component';

describe('VienTruongComponent', () => {
  let component: VienTruongComponent;
  let fixture: ComponentFixture<VienTruongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VienTruongComponent]
    });
    fixture = TestBed.createComponent(VienTruongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
