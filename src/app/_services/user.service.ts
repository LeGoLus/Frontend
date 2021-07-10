import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', { responseType: 'text' });
  }

  getSaleBoard(): Observable<any> {
    return this.http.get(API_URL + 'sale', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getTechnicianBoard(): Observable<any> {
    return this.http.get(API_URL + 'technician', { responseType: 'text' });
  }

  getServiceBoard(): Observable<any> {
    return this.http.get(API_URL + 'service', { responseType: 'text' });
  }
}
