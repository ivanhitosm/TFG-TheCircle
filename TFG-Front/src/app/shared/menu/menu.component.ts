import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[];
  itemsM: MenuItem[]=[];

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
            label: 'Para Fumar',
            routerLink: 'basicas'
          },
          {
            label: 'Para Beber',
            routerLink: 'basicas'
          },
          {
            label: 'Para Picar',
            routerLink: 'basicas'
          }]
      },
      {
        label: 'TIENDA',
        icon: 'pi pi-shopping-bag',
        items:[
          {
            label: 'SiSHAS',
            routerLink: 'articles'
          },
          {
            label: 'TABACOS',
            routerLink: 'articles'
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
      },
      {
        icon: 'pi pi-shopping-cart',
        style: {'margin-left': 'auto'}
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
        // label: 'CARTA',
        icon: 'pi pi-list',
        items:[
          {
            label: 'MOVILLLLL',
            routerLink: 'articles'
          },
          {
            label: 'HOLAAAAAA',
            routerLink: 'articles'
          },
          {
            label: 'ADIOOOOOOSSS',
            routerLink: 'articles'
          }]
      },
      {
        // label: 'TIENDA',
        icon: 'pi pi-shopping-bag',
        items:[
          {
            label: 'SiSHAS',
            routerLink: 'articles'
          },
          {
            label: 'TABACOS',
            routerLink: 'articles'
          },
          {
            label: 'MANGUERAS',
            routerLink: 'articles'
          }]
      },
      {
        // label: 'FAQs',
        icon: 'pi pi-comment',
      },
      {
        icon: 'pi pi-shopping-cart',
      },
      {
        icon: 'pi pi-user',
        items:[
          {
            label: 'Iniciar Sesion',
            icon: 'pi pi-sign-in',
            routerLink: 'basicas'
          },
          {
            label: 'Registrarse',
            icon: 'pi pi-user-plus',
            routerLink: 'articles',

          }]
      }
    ];
  }
}
