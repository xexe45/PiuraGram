import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../services/posts/post.service';
import { Post } from '../../../models/post.class';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgTemp: string;
  imagen: File;
  post: string;

  posts: Post[] = [];

  constructor(
    public _loginService: LoginService,
    private toastr: ToastrService,
    public _postService: PostService
  ) {
    console.log(this._loginService.usuario);

  }

  ngOnInit() {
    this.misPosts(this._loginService.usuario._id);
  }

  verImagen(archivo: File) {
    if (!archivo) {
      this.imagen = null;
      return;
    }

    if (!archivo.type.includes('image')) {
      this.toastr.error('Debes seleccionar sólo imágenes', 'Error');
      this.imagen = null;
      return;
    }

    this.imagen = archivo;
    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => (this.imgTemp = reader.result);
  }

  publicar(f: NgForm) {
    if (f.invalid || !this.imagen) {
      console.log('Completa todos los campos para poder realizar una publicación');
      return;
    }

    const post = new Post(
      this._loginService.usuario._id,
      this.imgTemp,
      f.value.post
    );

    this._postService.crearPost(post, this._loginService.token)
      .subscribe(data => {
        console.log(data);
        this.imagen = null;
        this.post = '';
        this.imgTemp = '';
        this.toastr.success('Ahora tus amigos pueden ver tu nueva publicación', 'Publicación realizada');
        this.misPosts(this._loginService.usuario._id);
        $('#exampleModal').modal('hide');
      });
  }

  misPosts(id: string) {
    this._postService.getUserPosts(id)
      .subscribe( (posts: Post[]) => {
        this.posts = posts;
        console.log(this.posts);
      });
  }
}
