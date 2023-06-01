import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuSiKhoaMucComponent } from './tu-si-khoa-muc.component';

describe('TuSiKhoaMucComponent', () => {
  let component: TuSiKhoaMucComponent;
  let fixture: ComponentFixture<TuSiKhoaMucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuSiKhoaMucComponent]
    });
    fixture = TestBed.createComponent(TuSiKhoaMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
