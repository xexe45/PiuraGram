import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.class';
import { BASE_URL } from '../../config/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, private toastr: ToastrService, public router: Router) {
    this.cargarStorage();
  }

  estaLogueado() {
    return this.token.length > 4 ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  registrarUsuario(usuario: Usuario) {
    const url = BASE_URL + '/usuarios';

    return this.http
      .post(url, usuario)
      .map((resp: any) => {
        // Display a success toast, with a title
        return resp.usuario;
      })
      .catch(err => {
        console.log(err);
        this.toastr.error(err.error.mensaje, err.error.errors.message);
        return Observable.throw(err);
      });
  }

  login(usuario: Usuario) {
    const url = BASE_URL + '/login';
    return this.http
      .post(url, usuario)
      .map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuario);
        return true;
      })
      .catch(err => {
        console.log(err.error.mensaje);
        this.toastr.error(err.error.mensaje, err.error.errors.message);
        return Observable.throw(err);
      });
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }
}
