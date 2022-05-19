import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from "@angular/router"


import { DataService } from 'src/app/servicios/Data.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit{

  items: MenuItem[]=[];
  itemsM: MenuItem[]=[];
  productos:any = [];
  login:boolean | undefined;
 
  constructor( 
    private _dataService: DataService ,
    private router: Router,
    private _logingService:LoginService,
    ) {
    }
  
  busqueda(value: string){
    this._dataService.busqueda(value).subscribe(
      result=>{
        this.productos=result;      
      this._dataService.messageSource=value;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['product'],{state: {result}})
      console.log("busqueda")
      },
      error=>{
        console.log(error);
      }
    );
  }
     
      ngOnInit() {
        this._logingService.logged.subscribe((islogged) => {
          this.login = islogged;
           console.log('logged', this.login);
           if(this.login){
            this.loginOn();
          }else{
            this.loginOff();
          }
       });
      }
      
      loginOff(){
        this.items = [
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
                routerLink: 'registro',
    
    
              }],
    
          }
        ];
    
        this.itemsM = [
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
            label: 'FAQs',
            icon: 'pi pi-comment',
            routerLink: 'faq'
          },
          {
            icon: 'pi pi-shopping-cart',
            style: {'margin-left': 'auto'},
            routerLink: 'areaAdm'
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
      loginOn(){
    this.items = [
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
        routerLink: 'areaAdm'       
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
            routerLink: 'registro',


          }],

      }
    ];

    this.itemsM = [
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
        routerLink: 'areaAdm'
      },
      {
        label: 'FAQs',
        icon: 'pi pi-comment',
        routerLink: 'faq'
      },
      {
        icon: 'pi pi-shopping-cart',
        style: {'margin-left': 'auto'},
        routerLink: 'areaAdm'
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


