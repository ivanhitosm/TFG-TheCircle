import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService ,Message} from 'primeng/api';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/servicios/alert.service';
import { DataService } from 'src/app/servicios/Data.service';

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
    private alertService: AlertService,
    private confirmationService: ConfirmationService,

  ) {}
  id!: number;
  isAddMode: boolean = false;
  loading = false;
  submitted = false;
  public imagePath: any;
  imgURL: any;
  public message: string | undefined;
  tags = ['Producto', 'Camisa', 'Pantalon', 'Complemento'];
  msgs: Message[] = [];
  
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

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    var urlMode = window.location.pathname.split('/')[2];

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

  onSubmit() {
    if (window.confirm('Estas seguro?')) {
      //console.warn(this.productoForm.value);
      this.submitted = true;
      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.productoForm.invalid) {
        return;
      }
      this.loading = true;
      if (this.isAddMode) {
        this.createUser();
      } else {
        this.updateUser();
      }
    }
  } 
  // onSubmit2() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure that you want to proceed?',
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //         this.msgs=[{severity:'Info', summary:'Loading', detail:'Producto Borrando'}];
  //             //console.warn(this.productoForm.value);
  //         this.submitted = true;
  //         // reset alerts on submit
  //         this.alertService.clear();

  //         // stop here if form is invalid
  //         if (this.productoForm.invalid) {
  //           return;
  //         }
  //         this.loading = true;
  //         if (this.isAddMode) {
  //           this.createUser();
  //         } else {
  //           this.updateUser();
  //         }
  //     },
  //     reject: () => {
  //       this.msgs=[{severity:'Info', summary:'Reject', detail:'Producto No Borrado'}];
       
  //     },
  //   });
   
  // }
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
          this.alertService.success('Productos added', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.alertService.error(error);
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
          this.alertService.success('Productos updated', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }
}
