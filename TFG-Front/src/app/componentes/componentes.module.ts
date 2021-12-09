import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { GaleryProductsComponent } from './galery-products/galery-products.component';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { ProductComponent } from './product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BigProductComponent } from './big-product/big-product.component';
import { ArticleSimpleComponent } from './article-simple/article-simple.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { ChipsInputComponent } from './chips-input/chips-input.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TableComponent } from './table/table.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CarouselImageComponent } from './carousel-image/carousel-image.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,

  ],
  exports:[
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
    CarouselImageComponent,
  ],
  bootstrap: [
  ],
})
export class ComponentesModule { }
