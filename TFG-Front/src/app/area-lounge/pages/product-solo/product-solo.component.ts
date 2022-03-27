import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/Data.service';

@Component({
  selector: 'app-product-solo',
  templateUrl: './product-solo.component.html',
  styleUrls: ['./product-solo.component.css']
})
export class ProductSoloComponent implements OnInit {
  id: number = history.state.result;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadTable();
    console.log(this.id)
  }

  loadTable() {
    this._dataService
      .getProductoID(this.id)
      .subscribe(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      );
  }
}
