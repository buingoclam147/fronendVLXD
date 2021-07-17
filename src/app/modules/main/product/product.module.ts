import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    ProductRoutingModule
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
