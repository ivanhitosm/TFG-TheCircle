import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService} from 'primeng/api';
import { first } from 'rxjs/operators';

import { DataService } from 'src/app/servicios/Data.service';
import { AreaAdmComponent } from '../../area-adm.component';

@Component({
  selector: 'app-edicion-producto',
  templateUrl: './edicion-producto.component.html',
  styleUrls: ['./edicion-producto.component.css'],
})
export class EdicionProductoComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private adminMsg:AreaAdmComponent,
    private confirmationService: ConfirmationService,

  ) {}
  id!: number;
  isAddMode: boolean = false;
  loading = false;
  public imagePath: any;
  imgURL: any;
  public message: string | undefined;
  tags = ['Producto', 'Camisa', 'Pantalon', 'Complemento'];
  marcas:any = [];
  completo=false;

  
  productoForm = this.fb.group({
    id:[''],
    nombre: ['', Validators.required],
    descripcionCorta: [''],
    descripcionLarga: [''],
    precio: [''],
    cantidad: [''],
    marca: [null],
    categoria: [null],
    distribuidor: [null],
    tag: [null],
    visible: [''],
    image: [null],
    
  });

  // extrasForm=this.fb.group({

    
  // });

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    var urlMode = window.location.pathname.split('/')[2];
    this.getExtras(this.id)
    if (urlMode == 'view') {
      this.productoForm.disable();
    }
   // console.log('viewMode=' + this.isViewMode + ' ' + urlMode);
    if (!this.isAddMode) {
      this.dataService
        .getProductoID(this.id)
        .pipe(first())
        .subscribe((x: { [key: string]: any }) =>
          this.productoForm.patchValue(x)
        );
    }
  }
  getExtras(id: number){
    this.dataService
    .getProductoID(id) .subscribe(
      (result: any) => {
        // console.log(result)
        this.marcas.push(result.marca.nombre)
        // console.log(this.marcas)
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // checkBoxClicked(){
  //   if (!this.completo) {
  //     this.productoForm.controls.marca.disable();
  //     this.productoForm.controls.categoria.disable();
  //     this.productoForm.controls.distribuidor.disable();
  //     this.productoForm.controls.tag.disable();
  //     this.productoForm.controls.image.disable();

  //     this.completo=!this.completo
  //   } else {
  //     this.productoForm.controls.marca.enable();
  //     this.productoForm.controls.categoria.enable();
  //     this.productoForm.controls.distribuidor.enable();
  //     this.productoForm.controls.tag.enable();
  //     this.productoForm.controls.image.enable();
  //     this.completo=!this.completo
  //   }
    
  // }


  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.adminMsg.UpdateMsg('Info','Loading','Cargando');
          // stop here if form is invalid
          if (this.productoForm.invalid) {
            this.adminMsg.UpdateMsg('Warn','Loading','Producto Invalido');
                     return;
          }
          this.loading = true;
          if (this.isAddMode) {
            this.createUser();
          } else {
            this.updateUser();
          }
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info','Reject','Producto No modificado');  
      },
    });
   
  }
  guardarImagen(){
    //nno

  }
  preview(files: any) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Solo subir Imagenes';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  private createUser() {
    this.productoForm.removeControl("id");
    this.dataService
      .postProducto(this.productoForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info','Confimed','Producto Añadido');
          this.router.navigate(['../'], { relativeTo: this.route });
         
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
          this.loading = false;
        },
      });
  }

  private updateUser() {
    //console.log(this.productoForm.value)
    this.productoForm.patchValue({id:this.id});
    this.dataService
      .updateProducto(this.productoForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info','Confimed','Producto modificado');
          this.router.navigate(['../../'], { relativeTo: this.route });
          if (this.productoForm.controls.image!= null) {
            let idProducto=this.productoForm.controls.id.value;
            let imagenProducto=this.productoForm.controls.image.value;
            this.dataService.PostimagenEnProducto(idProducto,imagenProducto)
          }
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
          this.loading = false;
        },
      });
  }
}
