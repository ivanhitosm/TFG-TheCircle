import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Productos } from "../models/productos.models";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(
    private http: HttpClient,
    public _http:HttpClient
    
    ) { }
  
  private REST_API_SERVER = "http://localhost:6868/";
  private params = new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
  productos:Productos[]=[];
 /*PETICIONES Productos */
  public getProductos(){
    return this.http.get(this.REST_API_SERVER+"Productos");
  }
  public getProductosPag(offset:number,pageSize:number,field:string ):Observable<any>{
    return this.http.get(this.REST_API_SERVER+"Productos/pagina/?offset="+offset+"&pageSize="+pageSize+"&field="+field)
    
  }
  public getPag(offset:number,pageSize:number ){
    return this.http.get(this.REST_API_SERVER+"Productos/pagina/?offset="+offset+"&pageSize="+pageSize)
  }

  public getUser():Observable<any>{
    return this._http.get(this.REST_API_SERVER+"ProductoId/2")
  }

/*-------------Barra de busqueda------------------------- */
public busqueda(nombre: string){
  return this._http.get(this.REST_API_SERVER+"ProductoNombre/"+nombre)
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