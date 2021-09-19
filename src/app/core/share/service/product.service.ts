import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { API } from '../../const/api';
import { PAGINATION_INIT } from '../../const/sys.const';
import { Pagination } from '../model/table.model';
import { HttpService, METHOD } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpService: HttpService) { }

  getProduct(pagination: Pagination, filter: {
    price?: number[],
    name?: string,
    categoryId?: string,
    supplierId?: string
  }): Observable<any> {
    const data = filter.price ?
      {
        ...pagination, ...filter, price: filter.price?.join(',')
      } :
      {
        ...pagination, ...filter
      };
    let result;
    if (data) {
      result = this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_LIST, data);
    }
    else {
      result = this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_LIST, PAGINATION_INIT);
    }

    return result.pipe(
      map((x: {
        total: number,
        data: any[]
      }) => {
        return {
          ...x,
          data: x.data.map((i) => this.tranformProduct(i))
        };
      }),
    );
  }

  private tranformProduct = (product: any) => {
    return {
      ...product,
      photos: product.photos.map(p => this.replaceImgUrl(p))
    };
  }

  private replaceImgUrl = (url) => {
    if (environment.production) {
      return url.replace('http://localhost:3000/', 'https://dbvlxd.herokuapp.com/');
    }
    return url;
  }

  getOneProduct(id: any): Observable<any> {
    return this.httpService.sendToServer(METHOD.GET, API.PRODUCT.GET_ONE(id)).pipe(
      map(x => this.tranformProduct(x))
    );
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
