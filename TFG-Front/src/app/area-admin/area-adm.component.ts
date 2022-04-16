import { Component } from '@angular/core';
import { Message } from 'primeng/api';
// import { Productos } from "../../models/productos.models";

@Component({
  selector: 'area-adm',
  templateUrl: './area-adm.component.html',
  styleUrls: 
  [
    './area-adm.component.css',
  '../../assets/fonts/font-awesome.min.css'
  ],
 
})
export class AreaAdmComponent  {
  
  msgs: Message[] = [];
  public UpdateMsg(severity:string, summary:string,detail:string){
    this.msgs=[{severity:severity, summary:summary, detail:detail}];
  }
  public ClearMsg(){
    this.msgs=[]
  }

}
