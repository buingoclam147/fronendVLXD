import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/core/share/share.module';
import { AboutUsComponent } from './about-us.component';
import { AboutUsRoutingModule } from './about-us.routing';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
