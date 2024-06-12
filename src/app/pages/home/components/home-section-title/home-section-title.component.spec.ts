import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionTitleComponent } from './home-section-title.component';

describe('HomeSectionTitleComponent', () => {
  let component: HomeSectionTitleComponent;
  let fixture: ComponentFixture<HomeSectionTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSectionTitleComponent]
    });
    fixture = TestBed.createComponent(HomeSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
