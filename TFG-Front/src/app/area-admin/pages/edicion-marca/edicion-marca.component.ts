import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService} from 'primeng/api';
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
  isAddMode: boolean = false;
  loading = false;
  public imagePath: any;
  imgURL: any;
  public message: string | undefined;
  Productos :any;
  marcas:any = [];
  completo=false;
  urlMode!: string;
  productoId!: number ;
  arr!: unknown[] ;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
    private route: ActivatedRoute,
    private adminMsg:AreaAdmComponent,
    private confirmationService: ConfirmationService,

  ) {}
  
  marcaForm = this.fb.group({
    id:[''],
    nombre: ['', Validators.required],
    
    
  });

 


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
   this.urlMode = window.location.pathname.split('/')[2];
   
    if (this.urlMode == 'viewMarca') {
      this.marcaForm.disable();
    }
   // console.log('viewMode=' + this.isViewMode + ' ' + urlMode);
    if (!this.isAddMode) {
      this.dataService
        .getMarcaID(this.id)
        .pipe(first())
        .subscribe((x: { [key: string]: any }) =>
          this.marcaForm.patchValue(x)
        );
    }
    this.loadProductosDeMarca();

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
            this.adminMsg.UpdateMsg('Warn','Loading','Marca Invalido');
                     return;
          }
          this.loading = true;
          if (this.isAddMode) {
            this.createUser();
          } else {
            this.updateMarca();
          }
      },
      reject: () => {
        this.adminMsg.UpdateMsg('Info','Reject','Marca No modificado');  
      },
    });
   
  }
 

  private createUser() {
    this.marcaForm.removeControl("id");
    this.dataService
      .postMarca(this.marcaForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.adminMsg.UpdateMsg('Info','Confimed','Marca Añadido');
          this.router.navigate(['../'], { relativeTo: this.route });
         
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
          this.loading = false;
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
          this.adminMsg.UpdateMsg('Info','Confimed','Marca modificado');
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.adminMsg.UpdateMsg('Info','Reject',error);
          this.loading = false;
        },
      });
  }
  public loadProductosDeMarca(){
    this.dataService
    .getProductosDeMarca(this.id)
    .subscribe(
      (result) => {

        console.log(result)

      },
      (error) => {
        console.log(error);
      }
    );
  }

  public productoEnMarca(){
    this.dataService
    .postproductosnEnMarca(this.productoId,this.id)
    .subscribe(
      (result) => {
       
        console.log(result);

       
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
