import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PAGINATION_INIT } from '../../const/sys.const';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private httpService: HttpService) { }

  getCategory(pagination: any): Observable<any> {
    if (pagination) {
      return this.httpService.sendToServer(METHOD.GET, 'category', pagination);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, 'category', PAGINATION_INIT);
    }
  }
}
