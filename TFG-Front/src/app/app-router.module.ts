import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './area-lounge/pages/articles/articles.component';
import { CartaComponent } from './area-lounge/pages/carta/carta.component';
import { SubsComponent } from './area-lounge/pages/subs/subs.component';
import { MainComponent } from './area-lounge/pages/main/main.component';
import { LoginComponent } from './area-lounge/pages/login/login.component';
import { PanelAdmComponent } from './area-admin/panel-adm/panel-adm.component';
import { FaqComponent } from './area-lounge/pages/faq/faq.component';
import { ProductosComponent } from './area-lounge/pages/productos/productos.component';

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
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'subs',
    component: SubsComponent,
  },
  {
    path: 'paneladm',
    component: PanelAdmComponent,
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
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
