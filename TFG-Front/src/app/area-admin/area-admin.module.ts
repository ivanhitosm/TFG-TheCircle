
import { NgModule } from '@angular/core';
import { AppRouterModule } from '../app-router.module';
import { AreaAdmComponent } from "./area-adm.component";
import { PagesModule } from './pages/pages.module';





@NgModule({
  declarations: [
    AreaAdmComponent
  ],
  exports:[
    AreaAdmComponent,
    
  ],
  imports: [
    PagesModule,
    AppRouterModule
    
  ],
  providers:[
    PagesModule,
    
  ]
})
export class AreaAdminModule { }
