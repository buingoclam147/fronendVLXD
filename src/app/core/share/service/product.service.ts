import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpService: HttpService) { }

  getProduct(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter, price: `${filter.price}`

    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneProduct(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_ONE(id));
  }
  postOneProduct(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.PRODUCT.POST_ONE, data);
  }
  deleteOneProduct(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.PRODUCT.DELETE_ONE(id));
  }
  updateProduct(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.PRODUCT.UPDATE(id), data);
  }
  deleteProduct(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.PRODUCT.DELETE_MANY, data);
  }
}
