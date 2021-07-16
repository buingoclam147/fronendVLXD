import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { ShareModule } from 'src/app/core/share/share.module';
import { SupplierRoutingModule } from './supplier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    SupplierRoutingModule
  ],
  declarations: [SupplierComponent]
})
export class SupplierModule { }
