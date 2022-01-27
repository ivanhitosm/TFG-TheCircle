import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    BannerComponent,
    MapComponent,
  ],
  exports:[
    BannerComponent,
    MapComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
