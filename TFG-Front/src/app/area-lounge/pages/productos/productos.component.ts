import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/Data.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: any = [];

  offset = 0;
  pageSize = 6;
  field = 'id';
  infoPag: any = [];
  raw: any = [];
  busqueda: boolean = true;
  value = '';
  imgUrl:any;
  thumbnail: any[]=[];
  image: any="";
  

  constructor(
    private _dataService: DataService,
     private router: Router,
      private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    //console.log(history.state.result)
    if (history.state.result) {
      this.loadTableFromSearch();
    } else {
      this.loadTable();
    }
  }

  linkProductoSolo(id: any) {
    this.router.navigate(['productSolo',id]);
  }
  loadTableFromSearch() {
    this.busqueda = false;
    this.value = this._dataService.messageSource;
    this.productos = history.state.result;
  }

  loadTable() {
    this._dataService
      .getProductosPag(this.offset, this.pageSize, this.field)
      .subscribe(
        (result) => {

          this.productos = result.content;
          this.infoPag = result.pageable;
          this.raw = result;
         console.log(this.productos);
          for (const element of this.productos) {
           if (element.imagen!=null) {         
             
              this.getImageProduct(element.id);
             
           } else {
            
            this.thumbnail.push(this.image)
           }
            
          } 
          
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

  getImageProduct(id:number){ 
    this._dataService
    .getImagenesProduct(id)
    .subscribe(
      (result) => {
        let objectURL = URL.createObjectURL(result);       
       this.image = this._sanitizer.bypassSecurityTrustUrl(objectURL);
        this.thumbnail.push(this.image);
        console.log(this.thumbnail)
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
  
}
