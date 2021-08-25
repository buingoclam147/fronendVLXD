import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/core/share/share.module';
import { ShopingCartComponent } from './shoping-cart.component';
import { ShopingCartRoutingModule } from './shoping-cart.routing';


@NgModule({
  declarations: [
    ShopingCartComponent
  ],
  imports: [
    CommonModule,
    ShopingCartRoutingModule,
    ShareModule
  ]
})
export class ShopingCartModule { }
