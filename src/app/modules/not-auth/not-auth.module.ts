import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthComponent } from './not-auth.component';
import { NotAuthRoutingModule } from './not-auth.routing';
import { ShareModule } from 'src/app/core/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    NotAuthRoutingModule,
    ShareModule
  ],
  declarations: [NotAuthComponent]
})
export class NotAuthModule { }
