import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/servicios/Data.service';

@Component({
  selector: 'app-product-solo',
  templateUrl: './product-solo.component.html',
  styleUrls: ['./product-solo.component.css']
})
export class ProductSoloComponent implements OnInit {
  id:any = this.route.snapshot.paramMap.get('id');
  producto: any;
  idProducto: any;

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadTable();    
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
}
