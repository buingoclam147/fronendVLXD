import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/core/share/share.module';
import { CurrentUserRoutingModule } from './current-user.routing';
import { CurrentUserComponent } from './current-user.component';
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    CurrentUserRoutingModule
  ],
  declarations: [CurrentUserComponent]
})
export class CurrentUserModule { }
