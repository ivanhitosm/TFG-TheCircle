import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MiddleComponent } from './shared/middle/middle.component';
import { MaterialExampleModule} from '../material.module';
import {MatDatepickerModule} from '@angular/material/datepicker';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselComponent } from './componentes/carousel/carousel.component'; 
import { ProductComponent } from './componentes/product/product.component';
import { CarouselProductsComponent } from './componentes/carousel-products/carousel-products.component';
import { GaleryProductsComponent } from './componentes/galery-products/galery-products.component';
import { BigProductComponent } from './componentes/big-product/big-product.component';
import { ArticleSimpleComponent} from './componentes/article-simple/article-simple.component';
import { CarouselBasicComponent } from './componentes/carousel-basic/carousel-basic.component';
import { MatSliderComponent } from './componentes/mat-slider/mat-slider.component';
import { ChipsInputComponent } from './componentes/chips-input/chips-input.component';
import { PaginatorComponent } from './componentes/paginator/paginator.component';
import { ProgressBarComponent } from './componentes/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './componentes/progress-spinner/progress-spinner.component';
import { SnackBarComponent } from './componentes/snack-bar/snack-bar.component';
import { TableComponent } from './componentes/table/table.component';
import { DatePickerComponent } from './componentes/date-picker/date-picker.component';
import { HeaderResponsiveComponent } from './shared/header/header-responsive.component';




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
    BigProductComponent,
    ArticleSimpleComponent,
    CarouselBasicComponent,
    MatSliderComponent,
    ChipsInputComponent,
    PaginatorComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    SnackBarComponent,
    TableComponent,
    DatePickerComponent,
    HeaderResponsiveComponent,

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
    MatDatepickerModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
