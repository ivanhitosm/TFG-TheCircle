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
import { TablaClientesComponent } from './tabla-clientes/tabla-clientes.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';
import { TablaPedidosComponent } from './tabla-pedidos/tabla-pedidos.component';
import { EdicionPedidoComponent } from './edicion-pedido/edicion-pedido.component';



@NgModule({
  declarations: [
    TablaAdmComponent,
    EdicionProductoComponent,
    TablaClientesComponent,
    EdicionClienteComponent,
    TablaPedidosComponent,
    EdicionPedidoComponent

  ],
  exports:[
    TablaAdmComponent,
    EdicionProductoComponent
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
