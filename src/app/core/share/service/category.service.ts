import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private httpService: HttpService) { }

  getCategory(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter
    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.CATEGORY.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.CATEGORY.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneCategory(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.CATEGORY.GET_ONE(id));
  }
  postOneCategory(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.CATEGORY.POST_ONE, data);
  }
  updateCategory(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.CATEGORY.UPDATE(id), data);
  }
  deleteOneCategory(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.CATEGORY.DELETE_ONE(id));
  }
  deleteCategory(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.CATEGORY.DELETE_MANY, data);
  }
}
