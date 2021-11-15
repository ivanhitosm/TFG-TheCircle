import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { GaleryProductsComponent } from './galery-products/galery-products.component';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { ProductComponent } from './product/product.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    CarouselPauseComponent,


  ],
  bootstrap: [
  ],
})
export class ComponentesModule { }
