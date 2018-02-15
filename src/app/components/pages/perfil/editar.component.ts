import { Usuario } from './../../../models/usuario.class';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  usuario: any = {};
  constructor(public _usuarioService: UsuarioService, public _toastr: ToastrService) {}

  ngOnInit() {

    this.usuario = this._usuarioService
      .getUser()
      .subscribe((usuario: Usuario) => {
        this.usuario = usuario;
        console.log(this.usuario);
      });
  }

  editarUsuario(forma: NgForm) {
    if ( forma.invalid ) {
      this._toastr.error('Debes completar bien el formulario para editar tus datos', 'Importante!');
      return;
    }

    this._usuarioService.editarUser(this.usuario)
      .subscribe( usuario => console.log(usuario) );
  }
}
