import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from "@angular/router"


import { DataService } from 'src/app/servicios/Data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  itemsM: MenuItem[]=[];
  productos:any = [];
 
  constructor( 
    private _dataService: DataService ,
    private router: Router
    ) {   }

  
  busqueda(value: string){
    this._dataService.busqueda(value).subscribe(
      result=>{
        this.productos=result;      
      this.router.navigate(['product'],{state: {result}})
      this._dataService.messageSource=value;
      },
      error=>{
        console.log(error);
      }
    );
   
  }
  
      ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-home',
        routerLink: 'main'
      },
      {
        label: 'CARTA',
        icon: 'pi pi-list',
        items:[
          {
            label: 'Para Picar',
            routerLink: 'carta'
          }]
      },
      {
        label: 'TIENDA',
        icon: 'pi pi-shopping-bag',
        items:[
          {
            label: 'SiSHAS',
            routerLink: 'product'
          },
          {
            label: 'TABACOS',
            routerLink: 'product'
          },
          {
            label: 'MANGUERAS',
            routerLink: 'articles'
          }]
      },
      {
        label:'SUBSCRIPCIONES',
        icon: 'pi pi-user-plus',
        routerLink: 'subs'
      },
      {
        label:'ADM',
        icon: 'pi pi-user-plus',
        routerLink: 'paneladm'
      },
      {
        label: 'FAQs',
        icon: 'pi pi-comment',
        routerLink: 'faq'
      },
      {
        icon: 'pi pi-shopping-cart',
        style: {'margin-left': 'auto'},
        routerLink: 'shoppingCart'
      },
      {
        icon: 'pi pi-user',
        items:[
          {
            label: 'Iniciar Sesion',
            icon: 'pi pi-sign-in',
            routerLink: 'login'
          },
          {
            label: 'Registrarse',
            icon: 'pi pi-user-plus',
            routerLink: 'articles',


          }],

      }
    ];

    this.itemsM = [
      {
        // label:'INICIO',
        icon: 'pi pi-home',
        routerLink: 'main'
      },
      {
        label: 'CARTA',
        icon: 'pi pi-list',
        items:[
          {
            label: 'Para Picar',
            routerLink: 'carta'
          }]
      },
      {
        label: 'TIENDA',
        icon: 'pi pi-shopping-bag',
        items:[
          {
            label: 'SiSHAS',
            routerLink: 'product'
          },
          {
            label: 'TABACOS',
            routerLink: 'product'
          },
          {
            label: 'MANGUERAS',
            routerLink: 'articles'
          }]
      },
      {
        label:'SUBSCRIPCIONES',
        icon: 'pi pi-user-plus',
        routerLink: 'subs'
      },
      {
        label:'ADM',
        icon: 'pi pi-user-plus',
        routerLink: 'paneladm'
      },
      {
        label: 'FAQs',
        icon: 'pi pi-comment',
        routerLink: 'faq'
      },
      {
        icon: 'pi pi-shopping-cart',
        style: {'margin-left': 'auto'},
        routerLink: 'paneladm'
      },
      {
        icon: 'pi pi-user',
        items:[
          {
            label: 'Iniciar Sesion',
            icon: 'pi pi-sign-in',
            routerLink: 'login'
          },
          {
            label: 'Registrarse',
            icon: 'pi pi-user-plus',
            routerLink: 'articles',


          }],

      }
    ];
  }
 
}


