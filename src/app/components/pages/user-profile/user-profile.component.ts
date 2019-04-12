import { LikesService } from './../../../services/likes/likes.service';
import { ComentariosService } from './../../../services/comentarios/comentarios.service';
import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { Post } from '../../../models/post.class';
import { Comentario } from '../../../models/comentario.class';
import { PostService } from '../../../services/posts/post.service';
import { Like } from '../../../models/likes.class';
declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() usuario: any = {};
  @Input() posts: Post[] = [];
  post: any = {};
  comentario: string;
  comentarios: Comentario[] = [];
  like = false;
  likes: Like[] = [];

  constructor(public _loginService: LoginService,
              public _comentarService: ComentariosService,
              public _postService: PostService,
              public _likeService: LikesService) {}

  ngOnInit() {}

  imgModal(post: Post) {
    console.log(post);
    this.post = post;
    this._comentarService.getComentarios(this.post._id)
      .subscribe(comentarios => {
        this.comentarios = comentarios;
        this.getLikes(this.post._id);
        $('#imgModal').modal();
      });
  }

  comentar() {
    if (this.comentario.length === 0) {
      return;
    }

    const comentario = new Comentario(
      this.post._id,
      this._loginService.usuario._id,
      this.comentario
    );

    this._comentarService.comentar(comentario)
      .subscribe( data => {
        console.log(data);
        this.comentario = '';
        $('#imgModal').modal('hide');
      });
  }

  getLikes(id: string) {
    this._postService.getLikesPost(id, this._loginService.token)
      .subscribe(data => {
        this.likes = data;
        console.log(this.likes);
        this.buscarMiLike();
      });
  }

  likear() {
    if (!this._loginService.usuario) {
      alert('Debes estar registrado');
      return;
    }
    const like = new Like(this.post._id, this._loginService.usuario._id);
    this._likeService.likear(like)
      .subscribe(data => {
        this.getLikes(this.post._id);
      });
  }

  buscarMiLike() {

    if ( !this._loginService.usuario) {
    this.like = false;
      return;
    }
    const user = this.likes.filter((like: Like) => like.usuario_id.includes(this._loginService.usuario._id));
    if (user.length > 0) {
      this.like = true;
    } else {
      this.like = false;
    }
    console.log(this.like);
  }
}
