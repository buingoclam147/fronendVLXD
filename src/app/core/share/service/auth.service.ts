import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService, METHOD } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpService: HttpService) { }
  login(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, 'auth/login', data);
  }
  loginCustomer(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, 'auth/loginCustomer', data);
  }
}
