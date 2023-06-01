import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuocSuComponent } from './luoc-su.component';

describe('LuocSuComponent', () => {
  let component: LuocSuComponent;
  let fixture: ComponentFixture<LuocSuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LuocSuComponent]
    });
    fixture = TestBed.createComponent(LuocSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
