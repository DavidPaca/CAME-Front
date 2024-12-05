import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Cambia 'home' si es necesario
  { path: 'about', component: AboutComponent },
];