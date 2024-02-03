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
  baseUrl = "https://mevamart-server.onrender.com/";
  // baseUrl = "http://localhost:3000";

  usersignup(userFormdata: any): Observable<any> {
    return this._http.post<any>(`${this.baseUrl}/signup`, userFormdata);
  }


  updatebyid(userprofileForm: any) {
    return this._http.put<any>(`${this.baseUrl}/update`, userprofileForm);
  }

  finduser(loginFormdata: any) {
    return this._http.post<any>(`${this.baseUrl}/signin`, loginFormdata);
  }
  finduserdata(id: any) {
    return this._http.get<any>(`${this.baseUrl}/${id}`);
  }

  addorderData(data: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/myorder`, data);
  }

  getprodData(): Observable<any> {
    return this._http.get(`${this.baseUrl}/product`)
  }

  getdelAdd(): Observable<any> {
    return this._http.get(`${this.baseUrl}/orders`);
  }

  getdelAddbyId(value: any): Observable<any> {
    return this._http.post(`${this.baseUrl}/myorders`, value);
  }

  cancelOrder(order_id: string) {
    return this._http.put(`${this.baseUrl}/cancelorder`, { order_id, });
  }

  getSingleData(id: any): Observable<any> {
    console.log(id);
    return this._http.get(`${this.baseUrl + '/orderid'}/${id}`);
  }



  cartCount = 0;
}
