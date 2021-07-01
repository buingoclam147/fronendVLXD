import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { ProductModule } from './product/product.module';
import { MainComponent } from './main.component';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    MainRoutingModule,
    NzBreadCrumbModule,
    NzLayoutModule,
    NzSkeletonModule,
    NzIconModule,
    NzMenuModule,
    NzBadgeModule,
    FormsModule,
    NzButtonModule,
    NzGridModule
  ]
})
export class MainModule { }
