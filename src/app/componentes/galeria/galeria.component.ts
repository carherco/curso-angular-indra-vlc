import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  // github.com/carherco/curso-angular
  images = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];

  currentImage: string;
  currentIndex: number;
  width: number;
  private intervalId: any;
  playing: boolean;

  constructor() {
    this.playing = false;
    this.width = 300;
    this.currentIndex = 0;
    this.currentImage = this.images[this.currentIndex];
  }

  ngOnInit() {
  }

  next() {
    this.currentIndex += 1;
    if ( this.currentIndex === this.images.length ) {
      this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
  }

  prev() {
    this.currentIndex -= 1;
    this.currentImage = this.images[this.currentIndex];
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.currentImage = this.images[this.currentIndex];
  }

  zoomIn() {
    this.width += 50;
  }

  zoomOut() {
    this.width -= 50;
  }

  play() {
    this.intervalId = setInterval( () => this.next() , 1000);
    this.playing = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.playing = false;
  }

}
