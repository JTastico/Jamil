import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { GraciasComponent } from './gracias/gracias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: '**', redirectTo: '' }
];