import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrainComponent } from './home-train.component';

describe('HomeTrainComponent', () => {
  let component: HomeTrainComponent;
  let fixture: ComponentFixture<HomeTrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTrainComponent]
    });
    fixture = TestBed.createComponent(HomeTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
