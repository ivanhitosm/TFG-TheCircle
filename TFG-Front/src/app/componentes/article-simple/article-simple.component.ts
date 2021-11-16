import { Component, ViewChild } from '@angular/core';
import {Bootstrap} from 'bootstrap/dist/js/bootstrap';

@Component({
  selector: 'app-article-simple',
  templateUrl: './article-simple.component.html',
  styleUrls: ['./article-simple.component.css']
})
export class ArticleSimpleComponent{

  modalDirect: Bootstrap.Modal;
  
@ViewChild('demoModal') input;

  open(element): void {
    this.modalDirect = new Bootstrap.Modal(element, {});
  }
}
