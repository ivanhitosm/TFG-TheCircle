import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './lounge/pages/articles/articles.component';
import { BasicasComponent } from './lounge/pages/basicas/basicas.component';
import { SubsComponent } from './lounge/pages/subs/subs.component';
import { MainComponent } from './lounge/pages/main/main.component';
import { LoginComponent } from './lounge/pages/login/login.component';
import { PanelADMComponent } from './lounge/pages/panel-adm/panel-adm.component';

const routes: Routes=[
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'basicas',
    component: BasicasComponent,
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
    component: PanelADMComponent,
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
