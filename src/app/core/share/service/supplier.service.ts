import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private httpService: HttpService) { }

  getSupplier(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter
    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.SUPPLIER.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.SUPPLIER.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneSupplier(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.SUPPLIER.GET_ONE(id));
  }
  postOneSupplier(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.SUPPLIER.POST_ONE, data);
  }
  deleteOneSupplier(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.SUPPLIER.DELETE_ONE(id));
  }
  updateSupplier(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.SUPPLIER.UPDATE(id), data);
  }
  deleteSupplier(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.SUPPLIER.DELETE_MANY, data);
  }
}
