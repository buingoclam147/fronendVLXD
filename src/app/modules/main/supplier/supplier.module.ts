import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { SupplierRoutingModule } from './supplier-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    SupplierRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SupplierComponent]
})
export class SupplierModule { }
