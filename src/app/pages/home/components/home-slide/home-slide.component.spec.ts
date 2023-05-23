import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideComponent } from './home-slide.component';

describe('HomeSlideComponent', () => {
  let component: HomeSlideComponent;
  let fixture: ComponentFixture<HomeSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSlideComponent]
    });
    fixture = TestBed.createComponent(HomeSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
