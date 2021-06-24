import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzCardModule,
    NzGridModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
