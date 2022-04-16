import { Component, OnInit } from '@angular/core';
import { ConfirmationService ,Message} from 'primeng/api';


import { DataService } from 'src/app/servicios/Data.service';
import { AreaAdmComponent } from "../../area-adm.component";
// import { Productos } from "../../models/productos.models";

@Component({
  selector: 'app-tabla-adm',
  templateUrl: './tabla-adm.component.html',
  styleUrls: [
    './tabla-adm.component.css',
    '../../../../assets/fonts/font-awesome.min.css',
  ],
})
export class TablaAdmComponent implements OnInit {
  productos: any[] | undefined;

  offset = 0;
  pageSize = 10;
  field = 'id';
  infoPag: any = [];
  raw: any = [];
  busqueda: boolean = true;
  value = '';
  page=0;
  totalPages=0;
  msgs: Message[] = [];
  
  constructor(
    private _dataService: DataService,
   private adminMsg:AreaAdmComponent,
    private confirmationService: ConfirmationService,
  
  ) {}

  ngOnInit() {
    //console.log(history.state.result)
    this.loadTable();
  }

  confirm(_id:number) {console.log("confim "+_id)
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.adminMsg.UpdateMsg('Info','Loading','Producto Borrando');
          this.deleteProducto(_id);           
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info','Reject','Producto No Borrando');       
      },
    });
    
}
  deleteProducto(_id: number){
    this._dataService
      .deleteProducto(_id)
        .subscribe(result=>{
          console.log(result);
            this.loadTable();
            this.adminMsg.UpdateMsg('Info','Confirmed','Producto Borrando');
        },
        (error: any) => {
          this.adminMsg.UpdateMsg('Warn','Loading',error);
        }
    );
  }

  loadTable() {
    this._dataService
      .getProductosPagAll(this.offset, this.pageSize, this.field)
      .subscribe(
        (result) => {
          console.log(
            "totalpages"+" "+result.totalPages+"\n "+
            "totalelements"+" "+result.totalElements+"\n "+
           
            
            "offset"+" "+this.offset+"\n "+
            "pageSize"+" "+this.pageSize+"\n "+
            "field:"+" "+this.field+"\n "+
            this.raw.totalPages
          );

          this.productos = result.content;
          this.infoPag = result.pageable;
          this.raw = result;
          this.totalPages=result.totalPages
          this.page=result.number+1;
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
  
 
}
