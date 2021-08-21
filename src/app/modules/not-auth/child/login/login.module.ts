import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareModule } from 'src/app/core/share/share.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { RegiterComponent } from './regiter/regiter.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    RegiterComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }
