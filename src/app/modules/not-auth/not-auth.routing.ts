import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthComponent } from './not-auth.component';

const routes: Routes = [
  {
    path: '', component: NotAuthComponent, children: [
      { path: '', loadChildren: () => import('./child/home/home.module').then((x) => x.HomeModule) },
      { path: 'about-us', loadChildren: () => import('./child/about-us/about-us.module').then((x) => x.AboutUsModule) },
      { path: 'product', loadChildren: () => import('./child/product/product.module').then((x) => x.ProductModule) },
      { path: 'contact', loadChildren: () => import('./child/contact/contact.module').then((x) => x.ContactModule) },
      { path: 'login', loadChildren: () => import('./child/login/login.module').then((x) => x.LoginModule) },
      { path: 'shoping-cart', loadChildren: () => import('./child/shoping-cart/shoping-cart.module').then((x) => x.ShopingCartModule) },
      { path: 'product-details/:id', loadChildren: () => import('./child/product-details/product-details.module')
      .then((x) => x.ProductDetailsModule) }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class NotAuthRoutingModule { }
