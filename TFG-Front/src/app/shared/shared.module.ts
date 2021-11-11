import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MiddleComponent } from './middle/middle.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MiddleComponent,
  ]
})
export class SharedModule { }
