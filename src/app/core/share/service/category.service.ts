import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  constructor(private httpService: HttpService) { }

  getCategory(): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, 'category');
  }

}
