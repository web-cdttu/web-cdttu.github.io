import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuyCheComponent } from './quy-che.component';

describe('QuyCheComponent', () => {
  let component: QuyCheComponent;
  let fixture: ComponentFixture<QuyCheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuyCheComponent]
    });
    fixture = TestBed.createComponent(QuyCheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
