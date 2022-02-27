import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = "http://localhost:6868/";

  constructor(private httpClient: HttpClient) { }
  public Get(campo: string){
    return this.httpClient.get(this.REST_API_SERVER+campo);
  }
}
/*
implementacion
componete.ts:
 import { DataService } from "../../../servicios/Data.service";

 .....
 
  productos:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.Get("Productos").subscribe((data)=>{
      console.log(data);
      this.productos=data;
    })  
  }

componente.html:
<div>
      <ul>
        <li *ngFor="let producto of productos; let id = index">
          {{producto.id}} {{producto.nombre}}
        </li>
      </ul>
     </div>


*/