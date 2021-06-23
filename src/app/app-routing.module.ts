import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/not-auth/not-auth.module').then((x) => x.NotAuthModule) },
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then((x) => x.MainModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
