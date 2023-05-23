import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListItemComponent } from './home-list-item.component';

describe('HomeListItemComponent', () => {
  let component: HomeListItemComponent;
  let fixture: ComponentFixture<HomeListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeListItemComponent]
    });
    fixture = TestBed.createComponent(HomeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
