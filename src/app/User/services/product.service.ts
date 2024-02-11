import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  baseUrl = "http://localhost:3000/product";


  getprodData(): Observable<any> {
    return this._http.get(`${this.baseUrl}`)
  }
  cartCount = 0;

}
