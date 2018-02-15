import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';
import { HomeComponent } from './home/home.component';
import { EditarComponent } from './perfil/editar.component';
import { EditarPasswordComponent } from './perfil/editar-password.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    EditarComponent,
    EditarPasswordComponent,
    PerfilComponent,
    UserProfileComponent,
    UsuariosComponent
  ],
  exports: [HomeComponent],
  imports: [SharedModule, PAGES_ROUTES, FormsModule, ReactiveFormsModule, CommonModule]
})
export class PagesModule {}
