import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  constructor() {
    
   }
   max = 10;
   rate = 7;
   isReadonly = true;  
   UserName: any;
   details: any;
   gdetails: any;
   Products: any;
   itemsCart:any =[]

  ngOnInit(): void {
    this.cartItemfunc();
    this.UserName = (localStorage.getItem('userName')||"")
  }
  addCart(category:any){

    let cartDataNull = localStorage.getItem("localCart")
    if(cartDataNull==null){
      let storeDataget:any = [];
      storeDataget.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataget));
      alert(' Successfully Added to your cart',);
      
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
this.cartItem = cartCount.length   }
  }
}
