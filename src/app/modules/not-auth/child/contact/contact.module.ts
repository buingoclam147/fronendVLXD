import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/core/share/share.module';
import { ContactRoutingModule } from './contact.routing';
import { ContactComponent } from './contact.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    ContactRoutingModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
