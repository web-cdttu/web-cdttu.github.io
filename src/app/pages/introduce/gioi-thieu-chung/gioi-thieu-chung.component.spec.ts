import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuChungComponent } from './gioi-thieu-chung.component';

describe('GioiThieuChungComponent', () => {
  let component: GioiThieuChungComponent;
  let fixture: ComponentFixture<GioiThieuChungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GioiThieuChungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GioiThieuChungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
