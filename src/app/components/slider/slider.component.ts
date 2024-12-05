import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './slider.component.html',
  // styleUrl: './slider.component.css'
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/slider/slider1.jpg',
    'assets/images/slider/slider2.jpg',
    'assets/images/slider/slider3.jpg'
  ];
  currentIndex: number = 0;
  private slideSubscription: Subscription | null = null; // Inicializado como null
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Verifica si está en el navegador
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startSlider();
    }
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  startSlider(): void {
    this.slideSubscription = timer(0, 10000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    });
  }

  stopSlider(): void {
    if (this.slideSubscription) {
      this.slideSubscription.unsubscribe();
    }
  }

  // Función para cambiar de imagen
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  // Lógica para el cambio automático de imágenes
  // private startAutoSlide() {
  //   setInterval(() => {
  //     this.currentIndex = (this.currentIndex + 1) % this.images.length;
  //   }, 10000); // Cambia de imagen cada 3 segundos
  // }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; // Retrocede al índice anterior
  }
  
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; // Avanza al índice siguiente
  }
}
