import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosComponent } from 'src/app/area-lounge/pages/productos/productos.component';
import { DataService } from 'src/app/servicios/Data.service';
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
export class AreaAdmComponent implements OnInit {
  productos: any[] | undefined;

  offset = 0;
  pageSize = 6;
  field = 'id';
  infoPag: any = [];
  raw: any = [];
  busqueda: boolean = true;
  value = '';
  dataSource =ProductosComponent;
  constructor(
    private _dataService: DataService,
     private router: Router
     ) {}

  ngOnInit() {
      this.loadTable();
  }
  loadTable() {
    this._dataService
      .getProductosPagAll(this.offset, this.pageSize, this.field)
      .subscribe(
        (result) => {
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

          this.productos = result.content;
          this.infoPag = result.pageable;
          this.raw = result;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  nextPage() {
    if (!this.raw.last) {
      this.offset = this.offset + 1;
      this.loadTable();
    }
  }
  previousPage() {
    if (!this.raw.first) {
      this.offset = this.offset - 1;
      this.loadTable();
    }
  }
  specificPage(num: number) {
    this.offset = num;
    this.loadTable();
  }
  cambiarPageSize(num: number) {
    this.pageSize = num;
    this.offset = 0;
    this.loadTable();
  }
  link(id: any) {
   
    this.router.navigate(['EdicionProducto/'+id]);
  }
 

}