import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sector-circular',
  templateUrl: './sector-circular.component.html',
  styleUrls: ['./sector-circular.component.css']
})

export class SectorCircularComponent {
  data: any;
    
    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }
}