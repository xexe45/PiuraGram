import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../models/usuario.class';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(public activatedRoute: ActivatedRoute, public _usuarioService: UsuarioService) {
    this.activatedRoute.params.subscribe(params => {
      const termino = params['usuario'];
      console.log(termino);
      this.buscar(termino);
    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
        console.log(this.usuarios);
      });
  }

}
