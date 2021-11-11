import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductFrameComponent } from './product-frame/product-frame.component';



@NgModule({
  declarations: [
    ProductFrameComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarouselComponent,
    ProductFrameComponent,
  ]
})
export class ComponentesModule { }
