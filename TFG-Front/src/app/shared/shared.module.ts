import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuComponent,
    AlertComponent
  ],
  exports:[
    FooterComponent,
    MenuComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    
  ]
})
export class SharedModule { }
