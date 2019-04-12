import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../config/config';
import { Comentario } from '../../models/comentario.class';
import { LoginService } from '../login/login.service';

@Injectable()
export class ComentariosService {

  constructor(public http: HttpClient, public _loginService: LoginService) { }

  comentar(comentario: Comentario) {
    let url = BASE_URL + '/comentarios';
    url += '?token=' + this._loginService.token;
    return this.http.post(url, comentario)
      .map( (resp: any) => {
        return resp.commentary;
      });
  }

  getComentarios(idpost: string) {
    const url = BASE_URL + '/posts/' + idpost + '/comentarios';
    return this.http.get(url)
      .map((resp: any) => {
        return resp.comentarios;
      });
  }

}
