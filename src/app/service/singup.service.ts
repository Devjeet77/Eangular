import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SingupService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}
  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/account`, data);
  }

  updateUser(id: any, data: any) {
    return this.http.put(`${this.baseUrl}/account/${id}`, data);
  }
}
