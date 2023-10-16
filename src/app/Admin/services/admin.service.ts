import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AdminService {
  constructor(private _http:HttpClient) { }
  backendhost='http://localhost:3000';
  myorders='http://localhost:3000/myorders';
  users='http://localhost:3000/allusers';
  product='http://localhost:3000/product';
  setstatus='http://localhost:3000/set_status';
  cancelorder='http://localhost:3000/cancelorder';
  totalorder='http://localhost:3000/orders';

  getprodData():Observable<any>{
    return this._http.get(`${this.product}`)
  }
  
    postproData(proddata:any, ):Observable<any>{
    return this._http.post(`${this.product}`,this.toFormData(proddata) )
  }
  
    deleteprodbyId(ProdId:any){
    return this._http.delete(`${this.product}/${ProdId}`);
  }


  getdelAdd():Observable<any>{
    
    return this._http.get(`${this.totalorder}`);
  }
  
    getdelAddbyId(userId:any):Observable<any>{
    return this._http.post(`${this.myorders}`,userId);
  }
  
    getuserData():Observable<any>{
    return this._http.get(`${this.users}`)
  }

  setOrderStatus(order_id:string, statuskey: string, statusValue:string){
    return this._http.put(`${this.setstatus}`, {order_id, statuskey, statusValue});
  }
  
  public toFormData( formValue: any ) {
    const formData = new FormData();
    for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
    }
    return formData;
    }
}
