import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
   
  ],
  exports:[
    FooterComponent,
    MenuComponent,
   
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    
  ]
})
export class SharedModule { }
