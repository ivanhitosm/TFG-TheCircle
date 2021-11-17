import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MiddleComponent } from './shared/middle/middle.component';
import {MaterialExampleModule} from '../material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './componentes/carousel/carousel.component'; 
import { ProductComponent } from './componentes/product/product.component';
import { CarouselProductsComponent } from './componentes/carousel-products/carousel-products.component';
import { GaleryProductsComponent } from './componentes/galery-products/galery-products.component';
import { CarouselPauseComponent } from './componentes/carousel-pause/carousel-pause.component';
import { BigProductComponent } from './componentes/big-product/big-product.component';
import { CarouselBasicComponent } from './componentes/carousel-basic/carousel-basic.component';
import { ArticleSimpleComponent } from './componentes/article-simple/article-simple.component';
import { CheckboxComponent } from './componentes/checkbox/checkbox.component';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    CarouselComponent,
    ProductComponent,
    CarouselProductsComponent,
    GaleryProductsComponent,
    CarouselPauseComponent,
    BigProductComponent,
    CarouselBasicComponent,
    ArticleSimpleComponent,
    CheckboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HammerModule,
    FormsModule,
    NgbModule,
    MaterialExampleModule,
    AccordionModule,
    CheckboxModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
