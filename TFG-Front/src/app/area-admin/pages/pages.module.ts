import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule,ConfirmationService } from "primeng/api";
import { ComponentesModule } from "src/app/area-lounge/componentes/componentes.module";
import { EdicionProductoComponent } from "./edicion-producto/edicion-producto.component";
import { TablaAdmComponent } from "./tabla-admin/tabla-adm.component";
import {ConfirmPopupModule,} from 'primeng/confirmpopup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { EdicionMarcaComponent } from "./edicion-marca/edicion-marca.component";



@NgModule({
  declarations: [
    TablaAdmComponent,
    EdicionProductoComponent,
    EdicionMarcaComponent

  ],
  exports:[
    TablaAdmComponent,
    EdicionProductoComponent,
    EdicionMarcaComponent

  ],
  imports: [
    ConfirmPopupModule,
    CommonModule,
    ComponentesModule,
    SharedModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ConfirmDialogModule,
    MessagesModule
  ],
  providers:[
    ConfirmationService,
  ],
  bootstrap:    [ AppComponent ]
})
export class PagesModule { }
