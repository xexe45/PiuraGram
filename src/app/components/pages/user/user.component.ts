import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../models/usuario.class';
import { Post } from '../../../models/post.class';
import { PostService } from '../../../services/posts/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usuario = {};
  posts: Post[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public _usuarioService: UsuarioService,
    public _postService: PostService
  ) {
    this.activatedRoute.params.subscribe(params => {
      const user = params['id'];
      this.getUsuario(user);
      this.misPosts(user);
    });
  }

  ngOnInit() {
  }

  getUsuario(id: string) {
    this._usuarioService.getUserFree(id).subscribe(data => {
      this.usuario = data;
      console.log(this.usuario);
    });
  }

  misPosts(id: string) {
    this._postService.getUserPosts(id).subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
}
