import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    MainRoutingModule,
    ShareModule
  ]
})
export class MainModule { }
