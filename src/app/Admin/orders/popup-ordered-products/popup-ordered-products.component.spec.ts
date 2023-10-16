import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOrderedProductsComponent } from './popup-ordered-products.component';

describe('PopupOrderedProductsComponent', () => {
  let component: PopupOrderedProductsComponent;
  let fixture: ComponentFixture<PopupOrderedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupOrderedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupOrderedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
