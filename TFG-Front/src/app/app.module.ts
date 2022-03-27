import { NgModule, LOCALE_ID, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PagesModule } from './area-lounge/pages/pages.module';
import { ComponentesModule } from './area-lounge/componentes/componentes.module';
import { SharedModule } from './shared/shared.module';

//Cambiar el locale de la app
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(localeES);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    RouterModule,
    ComponentesModule,
    PagesModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

