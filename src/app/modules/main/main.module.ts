import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';
import { ShareModule } from 'src/app/core/share/share.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
