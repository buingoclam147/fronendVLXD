import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private httpService: HttpService) { }
getCustomer(pagination: Pagination, filter: any): Observable<any> {
  const data = {
    ...pagination, ...filter
  };
  if (data) {
    return this.httpService.sendToServer(METHOD.GET, API.CUSTOMER.GET_LIST, data);
  }
  else {
    return this.httpService.sendToServer(METHOD.GET, API.CUSTOMER.GET_LIST, PAGINATION_INIT);
  }
}
getOneCustomer(id: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.GET, API.CUSTOMER.GET_ONE(id));
}
postOneCustomer(data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.POST, API.CUSTOMER.POST_ONE, data);
}
updateCustomer(id: any, data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.PATCH, API.CUSTOMER.UPDATE(id), data);
}
deleteOneCustomer(id: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.DELETE, API.CUSTOMER.DELETE_ONE(id));
}
deleteCustomer(data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.POST, API.CUSTOMER.DELETE_MANY, data);
}
}
