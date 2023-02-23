import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8082';
  constructor(private http: HttpClient) {}

  addCart(data:any){
    return this.http.post(`${this.baseUrl}/cart`,data);
  }

  getCartByUser(data:any){
    return this.http.post(`${this.baseUrl}/cart/user`,data);
  }

  getCart(){
    return this.http.get(`${this.baseUrl}/cart/get`);
  }
  deleteCart(id:any){
    return this.http.delete(`${this.baseUrl}/cart/delete/${id}`)
  }
}
