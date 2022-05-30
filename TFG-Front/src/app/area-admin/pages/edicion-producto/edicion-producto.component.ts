import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/servicios/Data.service';
import { AreaAdmComponent } from '../../area-adm.component';

@Component({
  selector: 'app-edicion-producto',
  templateUrl: './edicion-producto.component.html',
  styleUrls: ['./edicion-producto.component.css'],
})
export class EdicionProductoComponent {
  id!: number;
  isAddMode: boolean = false;
  loading = false;
  public imagePath: any;

  public message: string | undefined;
  tags = ['Producto', 'Camisa', 'Pantalon', 'Complemento'];
  marcas: any = [];
  completo = false;
  urlMode!: string;
  Image: Blob | undefined;
  selectedFile: any;
  imgURL: any;
  productoTieneImagen: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private adminMsg: AreaAdmComponent,
    private confirmationService: ConfirmationService,
    private sanitizer: DomSanitizer
  ) {}

  productoForm = this.fb.group({
    id: [''],
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
    this.urlMode = window.location.pathname.split('/')[2];
    // this.getExtras(this.id)
    if (this.urlMode == 'viewProducto') {
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
      this.getImageProduct();
    }
  }
  getImageProduct() {
    this.dataService.getImagenesProduct(this.id).subscribe(
      (result) => {
        console.log(result);
        if (result.size != 0) {
          let objectURL = URL.createObjectURL(result);
          this.imgURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
          this.productoTieneImagen = true;
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  borrarImagenDeProducto() {
    this.confirmationService.confirm({
      message: 'Seguro quieres borrar la imagen?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dataService.borrarImagen(this.id).subscribe(
          (result) => {
            console.log(result);
            const currentUrl = this.router.url;
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([currentUrl]);
              });
          },
          (error) => {
            console.log('error', error);
            const currentUrl = this.router.url;
            this.router
              .navigateByUrl('/', { skipLocationChange: true })
              .then(() => {
                this.router.navigate([currentUrl]);
              });
          }
        );
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info', 'Reject', 'Imagen No modificada');
      },
    });
  }

  onSubmit() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.adminMsg.UpdateMsg('Info', 'Loading', 'Cargando');
        // stop here if form is invalid
        if (this.productoForm.invalid) {
          this.adminMsg.UpdateMsg('Warn', 'Loading', 'Producto Invalido');
          return;
        }
        this.loading = true;
        if (this.isAddMode) {
          this.createProducto();
        } else {
          this.updateProducto();
        }
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info', 'Reject', 'Producto No modificado');
      },
    });
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
    console.log(files[0]);
    this.productoForm.patchValue({ image: files[0] });
  }

  private createProducto() {
    this.productoForm.removeControl('id');
    this.dataService
      .postProducto(this.productoForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info', 'Confimed', 'Producto Añadido');
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info', 'Reject', error);
          this.loading = false;
        },
      });
  }

  private updateProducto() {
    //console.log(this.productoForm.value)
    this.productoForm.patchValue({ id: this.id });
    this.dataService
      .updateProducto(this.productoForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          if (this.productoForm.controls.image != null) {
            this.saveImageInProduct();
          }
          this.adminMsg.UpdateMsg('Info', 'Confimed', 'Producto modificado');
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info', 'Reject', error.message);
          this.loading = false;
        },
      });
  }
  saveImageInProduct() {
    let idProducto = this.productoForm.controls.id.value;
    let imagenProducto = this.productoForm.controls.image.value;
    console.log(imagenProducto);
    this.dataService
      .postimagenEnProducto(idProducto, imagenProducto)
      .subscribe();
    console.log('hay imagen' + idProducto + imagenProducto);
  }
}
