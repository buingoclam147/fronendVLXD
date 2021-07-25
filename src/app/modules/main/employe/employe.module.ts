import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeComponent } from './employe.component';
import { ShareModule } from 'src/app/core/share/share.module';


@NgModule({
  declarations: [
    EmployeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    ShareModule
  ]
})
export class EmployeModule { }
