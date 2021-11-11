import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductFrameComponent } from './product-frame/product-frame.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    CarouselComponent,
    ProductFrameComponent,
  ]
})
export class ComponentesModule { }
