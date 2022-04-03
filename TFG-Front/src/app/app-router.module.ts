import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './area-lounge/pages/articles/articles.component';
import { CartaComponent } from './area-lounge/pages/carta/carta.component';
import { SubsComponent } from './area-lounge/pages/subs/subs.component';
import { MainComponent } from './area-lounge/pages/main/main.component';
import { LoginComponent } from './area-lounge/pages/login/login.component';
import { FaqComponent } from './area-lounge/pages/faq/faq.component';
import { ProductosComponent } from './area-lounge/pages/productos/productos.component';
import { ProductSoloComponent } from './area-lounge/pages/product-solo/product-solo.component';
import { ShoppingCartComponent } from './area-lounge/pages/shopping-cart/shopping-cart.component';
import { RegistroComponent } from './area-lounge/pages/registro/registro.component';
// import { AddEditComponent } from './area-admin/add-edit.component';

import { AreaAdmComponent } from "./area-admin/area-adm.component";
import { CommonModule } from "@angular/common";
import { PanelAdmComponent } from './area-admin/panel-adm.component';
const routes: Routes=[
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'carta',
    component: CartaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'subs',
    component: SubsComponent,
  },
  {
    path: 'paneladm',
    component: AreaAdmComponent,
    children: [
      { path: '',
       component: PanelAdmComponent },
      // { path: 'item/:id',
      //  component: AddEditComponent }
    ]
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'product',
    component: ProductosComponent,
  },
  {
    path: 'productSolo/:id',
    component: ProductSoloComponent,
  },
  {
    path: 'shoppingCart',
    component:   ShoppingCartComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
