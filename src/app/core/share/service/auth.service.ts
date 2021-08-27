import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ROUTER_CONST } from '../../const/router.const';
import { HttpService, METHOD } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject('');
  public readonly currentUser$ = this._currentUser$.asObservable();
  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
    const exitedUserId = localStorage.getItem('userId');
    if (exitedUserId) {
      this._currentUser$.next(exitedUserId);
    }
  }
  login(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, 'auth/login', data);
  }
  loginCustomer(data: any) {
    return this.httpService.sendToServer(METHOD.POST, 'auth/loginCustomer', data).pipe(
      tap(x => {
        localStorage.setItem('userId', x._id);
        this._currentUser$.next(x._id);
      })
    );
  }
  logout(){
    localStorage.setItem('userId', '');
    this.router.navigate([ROUTER_CONST.NOT_AUTH.LOGIN]);
    this._currentUser$.next('');
  }
}
