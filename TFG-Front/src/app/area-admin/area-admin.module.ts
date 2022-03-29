import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdmComponent } from './panel-adm/panel-adm.component';
import { EdicionProductoComponent } from './edicion-producto/edicion-producto.component';



@NgModule({
  declarations: [
    PanelAdmComponent,
    EdicionProductoComponent
  ],
  exports:[
    PanelAdmComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AreaAdminModule { }
