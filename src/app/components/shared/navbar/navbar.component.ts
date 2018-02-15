import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _loginService: LoginService, public router: Router) { }

  ngOnInit() {
  }

  salir() {
    this._loginService.logout();
  }

  usuarios(usuario: string) {
    this.router.navigate(['/usuarios/buscar', usuario]);
  }

}
