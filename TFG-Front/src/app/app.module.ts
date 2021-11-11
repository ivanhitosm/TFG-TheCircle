import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MiddleComponent } from './shared/middle/middle.component';
import { ProductFrameComponent } from './Componentes/product-frame/product-frame.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    ProductFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
