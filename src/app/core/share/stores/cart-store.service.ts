import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CartItem } from '../model/cart-item.model';
import { IProduct } from '../model/product.model';

interface CartState {
  cartItems: CartItem[];
}

const initValue: CartState = {
  cartItems: []
};

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  private readonly _state$ = new BehaviorSubject<CartState>(initValue);
  public readonly state$ = this._state$.asObservable();
  public readonly cartItems$ = this.state$.pipe(map((state: CartState) => {
    return state.cartItems;
  }));

  public readonly sumNum$ = this.state$.pipe(
    map((state: CartState) => {
      let sum = 0;
      state.cartItems.forEach((element: CartItem) => {
        sum += element.quantity;
      });
      return sum;
    })
  );
  public readonly total$ = this.state$.pipe(
    map((state: CartState) => {
      let sum = 0;
      state.cartItems.forEach((element: CartItem) => {
        sum += element.mathPrice;
      });
      return sum;
    })
  );
  constructor() {
  }
  detectExistCart() {
    const localData = JSON.parse(localStorage.getItem('dataProducts'));
    if (localData) {
      const cartItems = localData.cartItems.map(x => new CartItem(x.product as IProduct, Number(x.quantity)));
      const newState: CartState = { ...this._state$.getValue(), cartItems };
      this._state$.next(newState);
    }
  }
  addShopingCart(product: IProduct, quantity: number) {
    const existProduct = this._state$.getValue().cartItems.find(element => {
      return element.product._id === product._id;
    });
    if (existProduct) {
      let cartItems: CartItem[] = this._state$.getValue().cartItems;
      if (existProduct.quantity + quantity <= 0) {
        cartItems = cartItems.filter(x => {
          return x.product._id !== product._id;
        });
        const newState = { cartItems };
        this._state$.next(newState);
        localStorage.setItem('dataProducts', JSON.stringify(newState));
      }
      else {
        cartItems = cartItems.map((x: CartItem) => {
          return x.product._id === product._id ? new CartItem(x.product, x.quantity + quantity) : x;
        });
        const newState = { cartItems };
        this._state$.next(newState);
        localStorage.setItem('dataProducts', JSON.stringify(newState));
      }
    }
    else {
      const cartItems = [...this._state$.getValue()?.cartItems];
      cartItems.push(new CartItem(product, quantity));
      const newState = { ...this._state$.getValue(), cartItems };
      this._state$.next(newState);
      localStorage.setItem('dataProducts', JSON.stringify(newState));
    }
  }
  reset() {
    this._state$.next(initValue);
    localStorage.removeItem('dataProducts');
  }

}
