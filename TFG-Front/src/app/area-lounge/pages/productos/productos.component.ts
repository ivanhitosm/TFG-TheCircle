import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/Data.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:any = [];
 
  offset=0;
  pageSize=3;
  field="id";
  infoPag: any = [];
  raw:  any = [];

  constructor(
    private _dataService: DataService
    
    ) {   }
    ngOnInit(){
      //console.log(history.state.result)
      if(history.state.result){
       this.loadTableFormSearch();
      }else{this.loadTable();}

    }

    loadTableFormSearch(){
     // this.productos=history.state.result;
      var productosbusqueda;
      history.state.result.forEach((producto: any) => {
         productosbusqueda.push(producto)
       });
       
       this.productos=productosbusqueda;
        
      
    }

      loadTable(){
        this._dataService.getProductosPag(this.offset,this.pageSize,this.field).subscribe(
          result=>{
            // console.log(
            //   "totalpages"+" "+result.totalPages+"\n "+
            //   "totalelements"+" "+result.totalElements+"\n "+
            //   "size"+" "+result.size+"\n "+
            //   "number"+" "+result.number+"\n "+
            //   "offset"+" "+this.offset+"\n "+
            //   "pageSize"+" "+this.pageSize+"\n "+
            //   "field:"+" "+this.field+"\n "+
            //   this.raw.totalPages
            // );
           
            this.productos=result.content;
            this.infoPag=result.pageable;
            this.raw=result;
          },
          error=>{
            console.log(error);
          }
        );
      }
      nextPage(){
        if (!this.raw.last) {
        this.offset=this.offset+1;
        this.loadTable();
        }        }
      previousPage(){
        if (!this.raw.first) {
          this.offset=this.offset-1;
        this.loadTable();
        }        }
      specificPage(num: number){
        this.offset=num;
        this.loadTable();
        }
      cambiarPageSize(num: number){
        this.pageSize=num;
        this.offset=0;
        this.loadTable();
      }
     
 
}




