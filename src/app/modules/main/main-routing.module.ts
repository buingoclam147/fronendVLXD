import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/app/core/share/guards/login.guard';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'category', loadChildren: () => import('./category/category.module').then((x) => x.CategoryModule) },
      { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then((x) => x.SupplierModule) },
      { path: 'product', loadChildren: () => import('./product/product.module').then((x) => x.ProductModule) },
      { path: 'employee', loadChildren: () => import('./employe/employe.module').then((x) => x.EmployeModule) },
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then((x) => x.CustomerModule) },
      { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then((x) => x.InvoiceModule) }
    ], canActivate: [LoginGuard],
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then((x) => x.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
