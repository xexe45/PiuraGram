import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() usuario: any = {};
  constructor(public _loginService: LoginService) {}

  ngOnInit() {}
}
