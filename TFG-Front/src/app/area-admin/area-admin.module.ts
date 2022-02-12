import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdmComponent } from './panel-adm/panel-adm.component';



@NgModule({
  declarations: [
    PanelAdmComponent
  ],
  exports:[
    PanelAdmComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AreaAdminModule { }
