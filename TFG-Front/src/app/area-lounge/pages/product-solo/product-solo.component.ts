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
  image: any;


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
        let objectURL = URL.createObjectURL(result);       
            this.image = this._sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
