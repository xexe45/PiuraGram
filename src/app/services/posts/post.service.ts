
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../config/config';
import { Post } from './../../models/post.class';


@Injectable()
export class PostService {

  constructor(public http: HttpClient) { }

  crearPost(post: Post, token: string) {
    let url = BASE_URL + '/posts';
    url += '?token=' + token;
    return this.http.post(url, post)
      .map ( (resp: any) => {
        return resp.post;
      });
  }

  getUserPosts(id: string) {
    const url = BASE_URL + '/usuarios/' + id + '/posts';
    return this.http.get(url)
      .map((resp: any) => {
        return resp.posts;
      });
  }

  getLikesPost(id: string, token: string) {
    const url = BASE_URL + '/posts/' + id + '/likes';
    return this.http.get(url)
      .map((resp: any) => {
        return resp.likes;
      });
  }

}
