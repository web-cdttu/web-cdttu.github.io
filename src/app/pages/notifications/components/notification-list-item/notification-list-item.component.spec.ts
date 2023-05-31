import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NofiticationListItemComponent } from './notification-list-item.component';

describe('NofiticationListItemComponent', () => {
  let component: NofiticationListItemComponent;
  let fixture: ComponentFixture<NofiticationListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NofiticationListItemComponent]
    });
    fixture = TestBed.createComponent(NofiticationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
