import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:58628/weatherforecast/GetFailedOrders';
  baseUrl = 'http://localhost:58628/Orders/';

  getFailedOrders() {
    return this.http.get(this.baseUrl+"GetFailedOrders");
  }
  getNewOrders(){
    return this.http.get(this.baseUrl+"GetNewOrders");
  }

  getArchiveOrders(){
    return this.http.get(this.baseUrl+"GetArchiveOrders");
  }

  getSuccessOrders(){
    return this.http.get(this.baseUrl+"GetSuccessOrders");
  }

  getMenus(){
    return this.http.get(this.baseUrl+"GetMenus");
  }

  getOrderXml(id){
    return this.http.get(this.baseUrl+"GetOrderXml/"+id);
  }
}
