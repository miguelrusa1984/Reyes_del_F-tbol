import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Galeria } from './pages/galeria/galeria';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'galeria', component:Galeria},
    {path:'contacto', component:Contacto},
    {path:'**', redirectTo:''}
];
