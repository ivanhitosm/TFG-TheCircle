
import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel-basic',
    templateUrl: './carousel-basic.component.html',
    styleUrls: ['./carousel-basic.component.css']
  })

export class CarouselBasicComponent {
  // images = [666, 69, 420].map((n) => `https://picsum.photos/id/${n}/1900/500`);
    images = [
        'assets/images/photo1.jpg',
        'assets/images/photo2.jpg',
        'assets/images/photo3.jpg'
        ]
}