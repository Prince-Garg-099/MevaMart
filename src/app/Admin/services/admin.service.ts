import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AdminService {
  constructor(private _http:HttpClient) { }
  backendhost='https://mevamart-server.onrender.com';
  myorders='https://mevamart-server.onrender.com/myorders';
  users='https://mevamart-server.onrender.com/allusers';
  product='https://mevamart-server.onrender.com/product';
  setstatus='https://mevamart-server.onrender.com/set_status';
  cancelorder='https://mevamart-server.onrender.com/cancelorder';
  totalorder='https://mevamart-server.onrender.com/orders';

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
