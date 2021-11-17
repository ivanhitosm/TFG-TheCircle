import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { GaleryProductsComponent } from './galery-products/galery-products.component';
import { CarouselProductsComponent } from './carousel-products/carousel-products.component';
import { ProductComponent } from './product/product.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BigProductComponent } from './big-product/big-product.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { ArticleSimpleComponent } from './article-simple/article-simple.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


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
    BigProductComponent,
    CarouselBasicComponent,
    ArticleSimpleComponent,
    CheckboxComponent,

  ],
  bootstrap: [
  ],
})
export class ComponentesModule { }
