import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from './componentes/componentes.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    
  ],
  exports:[
    PagesModule,
    ComponentesModule
  ],
  imports: [
    PagesModule,
    CommonModule,
    ComponentesModule,
    SharedModule,
  ]
})
export class AreaLoungeModule { }
