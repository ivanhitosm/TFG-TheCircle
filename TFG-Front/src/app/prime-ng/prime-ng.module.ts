import { NgModule } from '@angular/core';

//PrimeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ChartModule} from 'primeng/chart';



@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    ChartModule,
  ]
})
export class PrimeNgModule { }