import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

constructor(private httpService: HttpService) { }
getEmploye(pagination: Pagination, filter: any): Observable<any> {
  const data = {
    ...pagination, ...filter
  };
  if (data) {
    return this.httpService.sendToServer(METHOD.GET, API.EMPLOYE.GET_LIST, data);
  }
  else {
    return this.httpService.sendToServer(METHOD.GET, API.EMPLOYE.GET_LIST, PAGINATION_INIT);
  }
}
getOneEmploye(id: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.GET, API.EMPLOYE.GET_ONE(id));
}
postOneEmploye(data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.POST, API.EMPLOYE.POST_ONE, data);
}
updateEmploye(id: any, data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.PATCH, API.EMPLOYE.UPDATE(id), data);
}
deleteOneEmploye(id: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.DELETE, API.EMPLOYE.DELETE_ONE(id));
}
deleteEmploye(data: any): Observable<any> {
  return this.httpService.sendToServer(METHOD.POST, API.EMPLOYE.DELETE_MANY, data);
}
}
