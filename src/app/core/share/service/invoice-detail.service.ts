import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailService {
  constructor(private httpService: HttpService) { }

  getInvoiceDetail(pagination: Pagination, filter: any): Observable<any> {
    const data = {
      ...pagination, ...filter
    };
    if (data) {
      return this.httpService.sendToServer(METHOD.GET, API.INVOICE_DETAIL.GET_LIST, data);
    }
    else {
      return this.httpService.sendToServer(METHOD.GET, API.INVOICE_DETAIL.GET_LIST, PAGINATION_INIT);
    }
  }
  getOneInvoiceDetail(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.INVOICE_DETAIL.GET_ONE(id));
  }
  postOneInvoiceDetail(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.INVOICE_DETAIL.POST_ONE, data);
  }
  updateInvoiceDetail(id: any, data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.PATCH, API.INVOICE_DETAIL.UPDATE(id), data);
  }
  deleteOneInvoiceDetail(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.DELETE, API.INVOICE_DETAIL.DELETE_ONE(id));
  }
  deleteInvoiceDetail(data: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.POST, API.INVOICE_DETAIL.DELETE_MANY, data);
  }
}
