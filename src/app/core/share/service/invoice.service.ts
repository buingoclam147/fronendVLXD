import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  constructor(private httpService: HttpService) { }
  getInvoice(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter
    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.INVOICE.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.INVOICE.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneInvoice(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.INVOICE.GET_ONE(id));
  }
  postOneInvoice(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.INVOICE.POST_ONE, data);
  }
  updateInvoice(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.INVOICE.UPDATE(id), data);
  }
  deleteOneInvoice(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.INVOICE.DELETE_ONE(id));
  }
  deleteInvoice(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.INVOICE.DELETE_MANY, data);
  }
}
