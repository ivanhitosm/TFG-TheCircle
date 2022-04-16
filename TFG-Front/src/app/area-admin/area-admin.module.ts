
import { NgModule } from '@angular/core';
import { AppRouterModule } from '../app-router.module';
import { AreaAdmComponent } from "./area-adm.component";
import { PagesModule } from './pages/pages.module';
import { MessagesModule } from 'primeng/messages';




@NgModule({
  declarations: [
    AreaAdmComponent
  ],
  exports:[
    AreaAdmComponent,
    
  ],
  imports: [
    PagesModule,
    AppRouterModule,
    MessagesModule,
    
  ],
  providers:[
    PagesModule,
    
  ]
})
export class AreaAdminModule { }
