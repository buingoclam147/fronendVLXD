import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'category', loadChildren: () => import('./category/category.module').then((x) => x.CategoryModule) },
      { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then((x) => x.SupplierModule) },
      { path: 'product', loadChildren: () => import('./product/product.module').then((x) => x.ProductModule) },
      { path: 'customer', loadChildren: () => import('./customer/customer.module').then((x) => x.CustomerModule) },
      { path: 'employe', loadChildren: () => import('./employe/employe.module').then((x) => x.EmployeModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
