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
  Domain = "https://mevamart-server.onrender.com/";
Url = 'https://mevamart-server.onrender.com';
backendhost='https://mevamart-server.onrender.com/';
myorder='https://mevamart-server.onrender.com/myorder';
myorders='https://mevamart-server.onrender.com/myorders';
users='https://mevamart-server.onrender.com/users';
products='https://mevamart-server.onrender.com/product';
setstatus='https://mevamart-server.onrender.com/set_status';
cancelorder='https://mevamart-server.onrender.com/cancelorder';
totalorder='https://mevamart-server.onrender.com/orders';
orderidUrl = 'https://mevamart-server.onrender.com/orderid';
apiUrl = 'https://mevamart-server.onrender.com/order';
searchproducts='https://mevamart-server.onrender.com/searchprod';

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
