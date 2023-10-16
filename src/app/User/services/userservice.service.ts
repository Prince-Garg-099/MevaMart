import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  constructor(private _http: HttpClient) { }

  
  get nativeWindow(): any {
    return _window();
  }
  Domain = "https://mevamart.onrender.com/";
Url = 'http://localhost:3000';
backendhost='http://localhost:3000/';
myorder='http://localhost:3000/myorder';
myorders='http://localhost:3000/myorders';
users='http://localhost:3000/users';
products='http://localhost:3000/product';
setstatus='http://localhost:3000/set_status';
cancelorder='http://localhost:3000/cancelorder';
totalorder='http://localhost:3000/orders';
orderidUrl = 'http://localhost:3000/orderid';
apiUrl = 'http://localhost:3000/order';
searchproducts='http://localhost:3000/searchprod';

usersignup( userFormdata:any ): Observable<any> {
return this._http.post<any>(`${this.Url}/signup`, userFormdata);
  }


  updatebyid( userprofileForm:any ) {
    return this._http.put<any>(`${this.Url}/update`, userprofileForm);}

  finduser(loginFormdata: any) {
    return this._http.post<any>(`${this.Url}/signin`, loginFormdata);
  }  
  finduserdata(id: any) {
    return this._http.get<any>(`${this.Url}/${id}`);
  }  

  addorderData(data: any): Observable<any> {
    return this._http.post(`${this.myorder}`, data);
  }

  getprodData():Observable<any>{
    return this._http.get(`${this.products}`)
  }

  getdelAdd():Observable<any>{
    return this._http.get(`${this.totalorder}`);
  }
  
    getdelAddbyId(value:any):Observable<any>{
    return this._http.post(`${this.myorders}`,value);
  }

  cancelOrder(order_id:string){
    return this._http.put(`${this.cancelorder}`,{order_id,});
  }

  getSingleData(orderid: any): Observable<any> {
    console.log(orderid);
    return this._http.get(`${this.orderidUrl}/${orderid}`);
  }

  searchProduct(val : any):Observable<any>{
    console.log(val);
    return this._http.post(`${this.searchproducts}`,{val});
  }

  cartCount = 0;
}
