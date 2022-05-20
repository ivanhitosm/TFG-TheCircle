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
import { AreaAdmComponent } from "./area-admin/area-adm.component";
import { CommonModule } from "@angular/common";
import { TablaAdmComponent } from './area-admin/pages/tabla-admin/tabla-adm.component';
import { EdicionProductoComponent } from './area-admin/pages/edicion-producto/edicion-producto.component';
import { EdicionMarcaComponent } from './area-admin/pages/edicion-marca/edicion-marca.component';


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
    path: 'areaAdm',
    component: AreaAdmComponent,
    children: [
        { path: '', component: TablaAdmComponent , pathMatch: 'full'},
        { path: 'addProducto', component: EdicionProductoComponent },
        { path: 'addMarca', component: EdicionMarcaComponent },
        { path: 'editProducto/:id', component: EdicionProductoComponent },
        { path: 'viewProducto/:id', component: EdicionProductoComponent },
        { path: 'viewMarca/:id', component: EdicionMarcaComponent },
        { path: 'editMarca/:id', component: EdicionMarcaComponent },
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
