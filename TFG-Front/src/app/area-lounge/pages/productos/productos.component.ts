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

  constructor(private _dataService: DataService, private router: Router, private sanitizer: DomSanitizer) {}

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

                   
console.log(this.productos)
         this.productos.forEach((element: any) => {
          let objectURL = 'data:image/jpeg;base64,' + result.content[element].imagen.imagen;
           this.thumbnail.push(this.sanitizer.bypassSecurityTrustUrl(objectURL))
           console.log(objectURL)
         });
          
          
        console.log(
          this.productos[0].imagen.image
        );
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

  getImageProduct(idProduct: number){
    this._dataService
    .getImagenesProduct(idProduct)
    .subscribe(
      (result) => {
        console.log('image', result)
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // prueba(json: any, file: File): Observable<any> {
  //   const formData = new FormData();
  //   formData.append('image', file, file.name);
  //   formData.append('json', JSON.stringify(json));
  
  //   const endpoint = 'http://localhost/tus_comercios_en_casa/kitum_rest_service/public/api/kitum/prueba';
  
  //   return this.http.post<any>(endpoint, formData, {
  //     headers: { 'X-Requested-With' : 'XMLHttpRequest' }
  //   });
  // }
}
