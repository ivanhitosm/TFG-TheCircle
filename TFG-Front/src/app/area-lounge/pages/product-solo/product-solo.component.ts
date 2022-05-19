import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/servicios/Data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-solo',
  templateUrl: './product-solo.component.html',
  styleUrls: ['./product-solo.component.css']
})
export class ProductSoloComponent implements OnInit {
  id:any = this.route.snapshot.paramMap.get('id');
  producto: any;
  idProducto: any;
  foto : any;
  base64Data : any;
  retrievedImage: any;


  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer) { }
    

  ngOnInit(): void {
    this.loadTable();    
    this.getImageProduct()
  }

  loadTable() {
    this._dataService
      .getProductoID(this.id)
      .subscribe(
        (result) => {
          this.producto = result;
          this.idProducto = this.producto.id;
          console.log('producto', this.producto)
          this.base64Data = this.producto.imagen.image;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

          console.log('ey', this.retrievedImage)

        },
        (error) => {
          console.log(error)
        }
      );
  }

  getImageProduct(){
    this._dataService
    .getImagenesProduct(this.id)
    .subscribe(
      (result) => {
       
        console.log('image', result)
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
