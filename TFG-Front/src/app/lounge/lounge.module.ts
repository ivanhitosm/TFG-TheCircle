import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicasComponent } from './pages/basicas/basicas.component';
import { MainComponent } from './pages/main/main.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SubsComponent } from './pages/subs/subs.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelADMComponent } from './pages/panel-adm/panel-adm.component';
import { FaqComponent } from './pages/faq/faq.component';





@NgModule({
  declarations: [
    BasicasComponent,
    MainComponent,
    ArticlesComponent,
    SubsComponent,
    LoginComponent,
    PanelADMComponent,
    FaqComponent,


  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ComponentesModule,
  ],
  exports:[
    BasicasComponent,
    MainComponent,
    ArticlesComponent,
    SubsComponent,
    LoginComponent,
    PanelADMComponent,
    FaqComponent,


  ]
})
export class LoungeModule { }
