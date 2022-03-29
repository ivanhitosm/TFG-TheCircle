import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { CartaComponent } from './carta/carta.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SubsComponent } from './subs/subs.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductSoloComponent } from './product-solo/product-solo.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ArticlesComponent,
    CartaComponent,
    FaqComponent,
    LoginComponent,
    MainComponent,
    SubsComponent,
    ProductosComponent,
    ProductSoloComponent,
    RegistroComponent
  ],
  exports:[
    ArticlesComponent,
    CartaComponent,
    FaqComponent,
    LoginComponent,
    MainComponent,
    SubsComponent,
    ProductSoloComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    SharedModule,
  ]
})
export class PagesModule { }
