import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupVarientComponent } from './popup-varient.component';

describe('PopupVarientComponent', () => {
  let component: PopupVarientComponent;
  let fixture: ComponentFixture<PopupVarientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupVarientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupVarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
