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

  /*-------------------listaproductos------------------------------ */
  public getProductosPagAll(offset:number,pageSize:number,field:string ):Observable<any>{
    return this._http.get(this.REST_API_SERVER+"Productos/paginaAll/?offset="+offset+"&pageSize="+pageSize+"&field="+field)
    
  }
  public postProducto(form: any){
    return this._http.post(this.REST_API_SERVER+"addProducto",form)
  }
  public updateProducto(form: any){
    return this._http.put(this.REST_API_SERVER+"updateProducto",form)
  }
  public deleteProducto(id: number){
    return this._http.delete(this.REST_API_SERVER+"delete/"+ id,{responseType: 'text'})
  }
  /*-------------Barra de busqueda------------------------- */
  public busqueda(nombre: string){
    return this._http.get(this.REST_API_SERVER+"ProductoNombre/"+nombre)
  }

  busquedaMensaje(message: string) {
    this.messageSource.next(message)
  }
  /*-------------imagenes------------------------- */

  public postimagenEnProducto(id:number, image:File){
    return this._http.post(this.REST_API_SERVER+"productos/"+id+"/images",image)
  }

  public getImagenesProduct(id: number){
    return this._http.get(this.REST_API_SERVER+"get/imageProducto/"+id ,{responseType: 'blob'})
  }

  /*-------------Marcas------------------------- */
  public getMarcas(){
    return this._http.get(this.REST_API_SERVER+"Marcas")
  }
  public getMarcaID(id:number){
    return this._http.get(this.REST_API_SERVER+"MarcaId/"+id)
  }
  public postMarca(form: any){
    return this._http.get(this.REST_API_SERVER+"addMarca",form)
  }
  public deleteMarca(id: number){
    return this._http.delete(this.REST_API_SERVER+"deleteMarca/"+ id,{responseType: 'text'})
  }
  public updateMarca(form: any){
    return this._http.put(this.REST_API_SERVER+"updateMarca",form)
  }
  public postproductosnEnMarca(id:number,id2:number){
    return this._http.post(this.REST_API_SERVER+"addProducto/"+id+"/Marca/"+id2,null)
  }

  public getProductosDeMarca(id:number){
    return this._http.get(this.REST_API_SERVER+"ProductosDeMarca/"+id)
  }

}
