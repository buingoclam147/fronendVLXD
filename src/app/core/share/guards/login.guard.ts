import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, ROUTER_CONFIGURATION, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTER_CONST } from '../../const/router.const';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  cookies = document.cookie;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isActive = this.cookies === 'status=employe' || this.cookies === 'status=admin';
    if (!isActive) {
      this.router.navigate([ROUTER_CONST.MAIN.LOGIN]);
    }
    return isActive;
  }

}
