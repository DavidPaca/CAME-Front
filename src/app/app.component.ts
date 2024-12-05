import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa el módulo común
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // Para enrutamiento
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from "./components/about/about.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SliderComponent, AboutComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router){}

  // Verifica si la ruta actual es la página principal
  isHomePage(): boolean {
    return this.router.url === '/';
  }
}
