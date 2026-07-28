import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Personnage } from './pages/personnage/personnage';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'personnage/:id', component: Personnage },
];


