import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ROUTER_CONST } from '../../const/router.const';
import { CartStoreService } from '../stores/cart-store.service';
import { HttpService, METHOD } from './http.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser$ = new BehaviorSubject('');
  private _idMain$ = new BehaviorSubject('');
  public readonly currentUser$ = this._currentUser$.asObservable();
  public readonly idMain$ = this._idMain$.asObservable();
  constructor(
    private httpService: HttpService,
    private router: Router,
    private cartStore: CartStoreService
  ) {
    const exitedUserId = localStorage.getItem('userId');
    if (exitedUserId) {
      this._currentUser$.next(exitedUserId);
    }
    this.cartStore.detectExistCart();
  }
  login(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, 'auth/login', data);
  }
  loginCustomer(data: any) {
    return this.httpService.sendToServer(METHOD.POST, 'auth/loginCustomer', data).pipe(
      tap(x => {
        if (typeof(x._id) !== 'undefined') {
          localStorage.setItem('userId', x._id);
          this._currentUser$.next(x._id);
        }
      })
    );
  }
  loginEmploye(data: any) {
    localStorage.setItem('employeId', data._id);
    this._idMain$.next(data._id);
  }
  logout() {
    localStorage.removeItem('userId');
    this.router.navigate([ROUTER_CONST.NOT_AUTH.LOGIN]);
    this._currentUser$.next('');
  }
}
