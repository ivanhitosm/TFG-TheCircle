import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { DataService } from 'src/app/servicios/Data.service';
import { AreaAdmComponent } from '../../area-adm.component';

@Component({
  selector: 'app-edicion-marca',
  templateUrl: './edicion-marca.component.html',
  styleUrls: ['./edicion-marca.component.css'],
})
export class EdicionMarcaComponent {

 
  id!: number;
  marcaForm;
  offset=0;
  pageSize=10;
  field="";
  ProductosEnMarca: any[]=[];
  isAddMode: boolean=false;
  urlMode!: string;
  ProductoList: Producto[] = [];
  selectedProduct:any;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private adminMsg:AreaAdmComponent,
    private confirmationService: ConfirmationService,) {
 
    this.marcaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      id: [''],
     
      Productos: ['', [Validators.required]],
      
    });
  }
  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
   this.urlMode = window.location.pathname.split('/')[2];
  
   
    if (this.urlMode == 'viewMarca') {
      this.marcaForm.disable();
     
    }
    if(!this.isAddMode){
      this.dataService
      .getMarcaID(this.id)
      .pipe(first())
      .subscribe((x: { [key: string]: any }) =>
        this.marcaForm.patchValue(x)
      );
    this.getAllProductos();
     this.getProductosDeMarca();
    }
 
  }
 
  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.adminMsg.UpdateMsg('Info','Loading','Cargando');
          // stop here if form is invalid
          if (this.marcaForm.invalid) {
            this.adminMsg.UpdateMsg('Warn','Loading','Marca Invalida');
                     return;
          }
          
          if (this.isAddMode) {
            this.createMarca();
          } else {
            this.updateMarca();
          }
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info','Reject','Marca No modificada');  
      },
    });
   
  }
  private createMarca() {
    this.marcaForm.removeControl("id");
    this.dataService
      .postMarca(this.marcaForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info','Confimed','Marca Añadida');
          this.router.navigate(['../'], { relativeTo: this.route });
         
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
         
        },
      });
  }

  private updateMarca() {
    //console.log(this.marcaForm.value)
    this.marcaForm.patchValue({id:this.id});
    this.dataService
      .updateMarca(this.marcaForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info','Confimed','Marca modificada');
          this.router.navigate(['../../'], { relativeTo: this.route });
          if (this.marcaForm.controls.image!= null) {
            console.log(this.marcaForm.controls.image)
          
            let idProducto=this.marcaForm.controls.id.value;
            let imagenProducto=this.marcaForm.controls.image.value;
            this.dataService.postimagenEnProducto(idProducto,imagenProducto).subscribe();
            console.log("hay imagen"+ idProducto+imagenProducto)
          }
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
          
        },
      });
  }
  getAllProductos(){
    this.dataService
    .getProductosPagAll(this.offset, this.pageSize, this.field)
    .subscribe(
      (result: { content: any; }) => {
        result.content.forEach((producto: any) => {
         this.ProductoList.push( new Producto(producto.id,producto.nombre))
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getProductosDeMarca(){
    this.dataService.getProductosDeMarca(this.id)
          
    .subscribe(
      (results ) => {
        Object.entries(results).forEach(item => {
          this.ProductosEnMarca.push(new Producto(item[1].id,item[1].nombre))
        })
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  guardarProductoEnMarca(){
    let idProducto=this.selectedProduct.id;
    let idMarca=this.id;
    this.dataService.postproductosnEnMarca(idProducto,idMarca).subscribe(
      (result) => {
        console.log(result)
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.ProductosEnMarca=[];
   
   this.getProductosDeMarca();
  }

 
}
 
 
export class Producto {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}