import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from "../models/productos.models";
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  messageSource: any;
 
  constructor(
    public _http:HttpClient
    
    ) { }
  
  private REST_API_SERVER = "http://localhost:6868/";
  productos:Productos[]=[];
 /*PETICIONES Productos */
  public getProductos(){
    return this._http.get(this.REST_API_SERVER+"Productos");
  }
  public getProductosPag(offset:number,pageSize:number,field:string ):Observable<any>{
    return this._http.get(this.REST_API_SERVER+"Productos/pagina/?offset="+offset+"&pageSize="+pageSize+"&field="+field)
    
  }
  public getPag(offset:number,pageSize:number ){
    return this._http.get(this.REST_API_SERVER+"Productos/pagina/?offset="+offset+"&pageSize="+pageSize)
  }

  public getProductoID(id: number):Observable<any>{
    return this._http.get(this.REST_API_SERVER+"ProductoId/"+ id)
  }

/*-------------Barra de busqueda------------------------- */
public busqueda(nombre: string){
  return this._http.get(this.REST_API_SERVER+"ProductoNombre/"+nombre)
}

busquedaMensaje(message: string) {
  this.messageSource.next(message)
}
/*-------------------listaproductos------------------------------ */
public getProductosPagAll(offset:number,pageSize:number,field:string ):Observable<any>{
  return this._http.get(this.REST_API_SERVER+"Productos/paginaAll/?offset="+offset+"&pageSize="+pageSize+"&field="+field)
  
}
public postProducto(form: any){
  return this._http.post(this.REST_API_SERVER+"addProducto",form)
}
public updateProducto(id: any, form: any){
  return this._http.put(this.REST_API_SERVER+"updateProducto",id,form)
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


     --------------


    


*/