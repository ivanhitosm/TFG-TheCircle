import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-adm',
  templateUrl: './panel-adm.component.html',
  styleUrls: ['./panel-adm.component.css','../../../assets/fonts/font-awesome.min.css']
})
export class PanelAdmComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    
  }
  link() {
    this.router.navigate(['EdicionProducto']);
  }
}
