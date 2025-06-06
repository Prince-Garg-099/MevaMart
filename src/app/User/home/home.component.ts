import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsCart: any = [];
  searchTerm: string = '';
  UserName: any;
  details: any;
  Products: any;
  AllProducts: any;
  cartItem: number = 0;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProdData();
    this.cartItemFunc();
  }

  onSearchInput(term: string): void {
    this.searchTerm = term;
    this.Products = this.AllProducts.filter(
      (product: { name: string; }) => product?.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getProdData(): void {
    this.productService.getprodData().subscribe(
      (res:any) => {
        this.Products = res.products;
        this.AllProducts = res.products;
      },
      (error:any) => {
        console.error('Error fetching product data:', error);
      }
    );
  }

  addCart(category: any): void {
    let cartDataNull = localStorage.getItem("localCart");
    if (cartDataNull == null) {
      let storeDataGet: any[] = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
      this.showAddToCartSuccess();
    } else {
      var id = category._id;
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || "");
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (id === (this.itemsCart[i]._id)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        this.showAddToCartSuccess();
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
        this.showAlreadyAddedToCart();
      }
    }
    this.cartItemFunc();
  }

  cartItemFunc(): void {
    this.UserName = localStorage.getItem('userName') || "";
    this.details = [];

    this.details = this.UserName.split(' ');
    if (localStorage.getItem('localCart') != null) {
      var cartCount = JSON.parse(localStorage.getItem('localCart') || "");
      this.cartItem = cartCount.length;
      this.productService.cartCount = this.cartItem;
    }
  }

  private showAddToCartSuccess(): void {
    // Implement your way to show success message to the user (e.g., toast message)
    alert('Successfully added to your cart');
  }

  private showAlreadyAddedToCart(): void {
    // Implement your way to show already added to cart message to the user (e.g., toast message)
    alert('Already added to cart');
  }
}
