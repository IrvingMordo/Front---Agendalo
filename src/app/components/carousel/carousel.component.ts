import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  currentIndex: number = 0;
  items: NodeListOf<Element> = document.querySelectorAll('[data-carousel-item]'); // Inicializa con una lista vacía

  ngOnInit() {
    this.items = document.querySelectorAll('[data-carousel-item]');
    this.showItem(this.currentIndex);
  }

  showItem(index: number) {
    this.items.forEach((item, i) => {
      if (i === index) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.showItem(this.currentIndex);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showItem(this.currentIndex);
  }
}
