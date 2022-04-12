import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route:ActivatedRoute,
    private alertService:AlertService
  ) {}
  id!: number;
  isAddMode: boolean = false;
  isViewMode:boolean=false;
  loading = false;
  submitted = false;

  productoForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcionCorta: [''],
    descripcionLarga: [''],
    precio: [''],
    cantidad: [''],
    marca: [''],
    categoria: [''],
    distribuidor: [''],
    tag: [''],
    visible:['']

  });

  tags = ['Producto', 'Camisa', 'Pantalon', 'Complemento'];

  link() {
    this.router.navigate(['paneladm']);
  }

 
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    var url =this.route.url.toString();
    
   console.log(url);

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
    console.warn(this.productoForm.value);
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

private createUser() {
    this.dataService.postProducto(this.productoForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('User added', { keepAfterRouteChange: true });
                this.router.navigate(['../'], { relativeTo: this.route });
            },
            error: (error: any) => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
}

private updateUser() {
    this.dataService.updateProducto(this.id, this.productoForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
                this.alertService.success('User updated', { keepAfterRouteChange: true });
                this.router.navigate(['../../'], { relativeTo: this.route });
            },
            error: (error: any) => {
                this.alertService.error(error);
                this.loading = false;
            }
        });
}
}