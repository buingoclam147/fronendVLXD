import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpService, METHOD } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id: string;
  constructor(private httpService: HttpService) { }
  login(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, 'auth/login', data);
  }
  get currentUser(): any {
    return of({ name: this.id });
  }
}
