import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  loginUser(data: any) {
    return this.http.post(`${this.baseUrl}/account/token`, data);
  }

  updateUser(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/account/${id}`, data);
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
    return true;
  }
  getEmail(){
    let token=localStorage.getItem("token");
    return this.http.post(`${this.baseUrl}/account/token/get`,token);
  }

  getAccountByEmail(email:any){
    return this.http.get(`${this.baseUrl}/account/email/${email}`)
  }

  logout(){
    localStorage.removeItem("token")
    return true;
  }
  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }
    else{
      return true;
    }
  }
}
