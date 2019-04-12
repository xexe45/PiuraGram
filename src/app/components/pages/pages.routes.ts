import { PerfilComponent } from './perfil/perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { LoginGuardGuard } from '../../services/guards/login-guard.guard';
import { PERFIL_ROUTES } from './perfil/perfil.routes';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UserComponent } from './user/user.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent, canActivate: [LoginGuardGuard] },
      { path: 'usuarios/buscar/:usuario', component: UsuariosComponent },
      { path: 'usuarios/:id', component: UserComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: 'perfil', component: PerfilComponent, canActivate: [LoginGuardGuard], children: PERFIL_ROUTES},
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
