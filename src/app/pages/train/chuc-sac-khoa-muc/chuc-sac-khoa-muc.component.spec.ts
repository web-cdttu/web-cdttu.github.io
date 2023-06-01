import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucSacKhoaMucComponent } from './chuc-sac-khoa-muc.component';

describe('ChucSacKhoaMucComponent', () => {
  let component: ChucSacKhoaMucComponent;
  let fixture: ComponentFixture<ChucSacKhoaMucComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChucSacKhoaMucComponent]
    });
    fixture = TestBed.createComponent(ChucSacKhoaMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
