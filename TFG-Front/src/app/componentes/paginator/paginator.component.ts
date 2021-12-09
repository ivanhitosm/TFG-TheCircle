import { Component } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent{

// MatPaginator Inputs
length = 100;
pageSize = 10;
pageSizeOptions: number[] = [5, 10, 25, 100];

// MatPaginator Output
pageEvent:any= PageEvent;

setPageSizeOptions(setPageSizeOptionsInput: string) {
  if (setPageSizeOptionsInput) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
}


/**  Copyright 2021 Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license */