import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  register = {
    password: 'catriel',
    email: 'perezcatriel@gmail.com',
  };
  form = document.querySelector('.login');

  logout = 'block';
  login = 'none';
  email = "perezcatriel@gmail.com";
  password = "catriel1";

  ngOnInit(): void {}

  onRegister(): void {
    if (
      this.register.email === this.email &&
      this.register.password === this.password
    ) {
      this.logout = this.login;
    }
  }
}
