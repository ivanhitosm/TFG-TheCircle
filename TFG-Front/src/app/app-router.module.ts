import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesComponent } from './lounge/pages/articles/articles.component';
import { BasicasComponent } from './lounge/pages/basicas/basicas.component';
import { SubsComponent } from './lounge/pages/subs/subs.component';
import { MainComponent } from './lounge/pages/main/main.component';
import { LoginComponent } from './lounge/pages/login/login.component';
import { PanelADMComponent } from './lounge/pages/panel-adm/panel-adm.component';
import { FaqComponent } from './lounge/pages/faq/faq.component';
import { SectorCircularComponent } from './componentes/sector-circular/sector-circular.component';

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
    path: 'faq',
    component: FaqComponent,
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
