import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComponentesModule } from '../componentes/componentes.module';
import { HeaderResponsiveComponent } from './header/header-responsive.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    ComponentesModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MiddleComponent,
    HeaderResponsiveComponent,
  ]
})
export class SharedModule { }
