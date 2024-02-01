import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userservice:UserserviceService) { }
  itemsCart:any =[]
  max = 10;
  rate = 7;
  isReadonly = true;
  UserName: any;
  details: any;
  gdetails: any;
  Products: any;
  AllProducts: any;
  filteredProducts: any;
  ngOnInit(): void {
     this.getproddata();
     this.cartItemfunc();

  }

  searchTerm: string = '';

  onSearchInput(term: string): void {
    this.searchTerm = term;
    console.log(this.searchTerm);
    this.Products = this.AllProducts.filter(
      (      product: { name: string; }) => product?.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );    
  }

  getproddata(){
    this.userservice.getprodData().subscribe((res)=>{
      console.log(res)
      this.Products = res; 
      this.AllProducts = res; 
     console.log(this.AllProducts)})}
  addCart(category:any){
    // this.toast.success('Hello world!', 'Toastr fun!');

    let cartDataNull = localStorage.getItem("localCart")
    if(cartDataNull==null){
      let storeDataget:any = [];
      storeDataget.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataget));
// \      
    }else{
      var id =category._id;
      let index:number = -1;
      this.itemsCart =JSON.parse(localStorage.getItem('localCart')||"");    
      for (let i=0; i<this.itemsCart.length; i++){
        if(id === (this.itemsCart[i]._id)){
          this.itemsCart[i].qnt =category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
        alert(' Successfully Added to your cart',);

      }
      else{
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
        alert('Already added to cart',);


          }
    }
  this.cartItemfunc();
  }
  cartItem:number=0;
  cartItemfunc(){
    this.UserName = (localStorage.getItem('userName')||"")
    this.details=[]

    this.details=this.UserName.split(' ');
    if (localStorage.getItem('localCart')!=null) {
         
      var cartCount =JSON.parse(localStorage.getItem('localCart')||"");
this.cartItem = cartCount.length
      this.userservice.cartCount = this.cartItem;
console.log(this.cartItem)
}
  }
}
