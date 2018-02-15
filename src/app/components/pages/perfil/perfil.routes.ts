import { EditarPasswordComponent } from './editar-password.component';
import { Routes } from '@angular/router';
import { EditarComponent } from './editar.component';

export const PERFIL_ROUTES: Routes = [
  { path: 'editar-perfil', component: EditarComponent },
  { path: 'editar-password', component: EditarPasswordComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'editar-perfil' }
];
