import { SubirArchivoService } from './subir-archivo/subir-archivo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { UsuarioService } from './usuario/usuario.service';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [],
  providers: [LoginService, LoginGuardGuard, UsuarioService, SubirArchivoService]
})
export class ServiceModule {}
