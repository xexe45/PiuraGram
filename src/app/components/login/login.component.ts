import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario.class';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrar = true;
  forma: FormGroup;
  email: string;
  password: string;
  constructor(
    public _loginService: LoginService,
    private toastr: ToastrService,
    public router: Router
  ) {}

  ngOnInit() {
    this.forma = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      nombre: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }

    const usuario = new Usuario(
      this.forma.value.email,
      this.forma.value.nombre,
      this.forma.value.user,
      this.forma.value.password
    );

    this._loginService.registrarUsuario(usuario).subscribe(data => {
      console.log(data);
      this.toastr.success(
        'Ahora inicia sesión para ver las fotos de tus amigos',
        'Bienvenido'
      );
      this.registrar = false;
    });
  }

  ingresar(forma: NgForm) {
    if (forma.invalid) {
      this.toastr.warning(
        'Complete todos los campos para iniciar sesión',
        'Importante!'
      );
      return;
    }

    const usuario = new Usuario(
      forma.value.email,
      null,
      null,
      forma.value.password
    );
    this._loginService
      .login(usuario)
      .subscribe(correcto => this.router.navigate(['/home']));
  }
}
