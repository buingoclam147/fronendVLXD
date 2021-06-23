import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ProductModule,
    MainRoutingModule
  ]
})
export class MainModule { }
