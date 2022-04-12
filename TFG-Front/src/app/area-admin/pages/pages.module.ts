import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "primeng/api";
import { ComponentesModule } from "src/app/area-lounge/componentes/componentes.module";
import { EdicionProductoComponent } from "./edicion-producto/edicion-producto.component";
import { TablaAdmComponent } from "./tabla-admin/tabla-adm.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablaAdmComponent,
    EdicionProductoComponent

  ],
  exports:[
    TablaAdmComponent,
    EdicionProductoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
 
    RouterModule
  ]
})
export class PagesModule { }
