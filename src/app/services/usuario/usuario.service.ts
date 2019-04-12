import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';
import { BASE_URL } from '../../config/config';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UsuarioService {
  constructor(
    public http: HttpClient,
    public _loginService: LoginService,
    public _toastr: ToastrService
  ) {}

  getUser() {
    const url = BASE_URL + '/usuarios/' + this._loginService.usuario._id;
    return this.http.get(url).map((usuario: any) => {
      return usuario.usuario;
    });
  }

  getUserFree(id: string) {
    const url = BASE_URL + '/usuarios/' + id;
    return this.http.get(url).map((usuario: any) => {
      return usuario.usuario;
    });
  }

  editarUser(usuario: any) {
    let url = BASE_URL + '/usuarios/' + this._loginService.usuario._id;
    url += '?token=' + this._loginService.token;
    return this.http.put(url, usuario).map((resp: any) => {
      this._loginService.guardarStorage(
        resp.usuario._id,
        this._loginService.token,
        resp.usuario
      );
      this._toastr.success(
        'Ahora tus amigos sabrán más sobre ti',
        'Edición Correcta!'
      );
      return resp.usuario;
    });
  }

  buscarUsuarios(termino: string) {
    const url = BASE_URL + '/usuarios/buscar/' + termino;
    return this.http.get(url).map((resp: any) => {
      return resp.usuarios;
    });
  }
}
