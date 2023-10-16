import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { NavbarComponent } from '../navbar/navbar.component';


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
  ngOnInit(): void {
     this.getproddata();
     this.cartItemfunc();

  }



  getproddata(){
    this.userservice.getprodData().subscribe((res)=>{
      console.log(res)
      this.Products = res; 
     console.log(this.Products)})}
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
this.cartItem = cartCount.length
      this.userservice.cartCount = this.cartItem;
console.log(this.cartItem)
}
  }
}
