import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(public _loginService: LoginService, public router: Router) {}

  canActivate(): boolean {
    if (this._loginService.estaLogueado()) {
      console.log('Puedes entrar');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
