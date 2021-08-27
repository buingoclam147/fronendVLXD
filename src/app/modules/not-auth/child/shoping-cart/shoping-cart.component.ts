import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
  totalPrice = 1512315610;
  totalPrd = 50000000;
  listOfData = [
    {
      key: '1',
      product: 'John Brown',
      img: '/assets/anhvlxd.jpg',
      price: 32000,
      number: 1,
      sumPrice: 32000
    },
    {
      key: '2',
      product: 'dsaw dwas',
      img: '/assets/anhvlxd.jpg',
      price: 35500,
      number: 1,
      sumPrice: 32000
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
