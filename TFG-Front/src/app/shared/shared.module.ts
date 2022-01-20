import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    
  ],
  exports:[
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    
  ]
})
export class SharedModule { }
