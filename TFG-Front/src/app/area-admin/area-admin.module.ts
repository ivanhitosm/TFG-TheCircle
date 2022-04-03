import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from '../app-router.module';


import { PanelAdmComponent } from './panel-adm.component';

import { AreaAdmComponent } from "./area-adm.component";


@NgModule({
  declarations: [
    PanelAdmComponent,

    AreaAdmComponent
  ],
  exports:[
    PanelAdmComponent,

    AreaAdmComponent
    
  ],
  imports: [
    AppRouterModule,
    RouterModule,
    CommonModule,
    MatTableModule,    
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    
    
    
  ]
})
export class AreaAdminModule { }
