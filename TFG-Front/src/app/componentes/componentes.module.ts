import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MapComponent } from './map/map.component';
import { SectorCircularComponent } from './sector-circular/sector-circular.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    BannerComponent,
    MapComponent,
    SectorCircularComponent,
  ],
  exports:[
    BannerComponent,
    MapComponent,
    SectorCircularComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ]
})
export class ComponentesModule { }
