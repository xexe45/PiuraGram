import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Like } from '../../models/likes.class';
import { BASE_URL } from './../../config/config';
import { LoginService } from '../login/login.service';

@Injectable()
export class LikesService {

  constructor(public http: HttpClient, public _loginService: LoginService) { }

  likear(like: Like) {
    let url = BASE_URL + '/likes';
    url += '?token=' + this._loginService.token;

    return this.http.post(url, like)
      .map((resp: any) => {
        return resp.like;
      });
  }

}
