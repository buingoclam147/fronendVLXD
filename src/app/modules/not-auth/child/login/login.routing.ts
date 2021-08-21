import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { RegiterComponent } from './regiter/regiter.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent, children: [
      { path: '', component: LoginFormComponent },
      { path: 'register', component: RegiterComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

