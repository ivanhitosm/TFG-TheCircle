import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { GaleryProductsComponent } from './galery-products/galery-products.component';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
    ProductComponent,
    CarouselProductsComponent,
    GaleryProductsComponent,
  ]
})
export class ComponentesModule { }
