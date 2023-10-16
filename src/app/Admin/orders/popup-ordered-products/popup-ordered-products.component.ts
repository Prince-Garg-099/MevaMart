import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-ordered-products',
  templateUrl: './popup-ordered-products.component.html',
  styleUrls: ['./popup-ordered-products.component.css']
})
export class PopupOrderedProductsComponent implements OnInit {

  constructor() { }
  @Input() order : any = {};

  ngOnInit(): void {
  }

}
