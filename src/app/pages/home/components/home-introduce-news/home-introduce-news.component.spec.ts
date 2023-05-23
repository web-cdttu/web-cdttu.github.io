import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroduceNewsComponent } from './home-introduce-news.component';

describe('HomeIntroduceNewsComponent', () => {
  let component: HomeIntroduceNewsComponent;
  let fixture: ComponentFixture<HomeIntroduceNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeIntroduceNewsComponent]
    });
    fixture = TestBed.createComponent(HomeIntroduceNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
