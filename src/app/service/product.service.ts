import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) {}

  getProducts(){
    return this.http.get(`${this.baseUrl}/product/all`)
  }

  searchProduct(search:any){
    return this.http.post(`${this.baseUrl}/product/search`,search);
  }
}
