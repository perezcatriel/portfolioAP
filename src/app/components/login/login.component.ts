import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  email = 'perezcatriel@gmail.com';
  password = 'catriel1';


  ngOnInit(): void {}

  valido(e: any) {
    if (e === this.email) {
      alert('bienvenido');
    }
  }

  onRegister(): void {
    if (
      this.register.email === this.email &&
      this.register.password === this.password
    ) {

    } else {
      alert('No es un usuario registrado');
    }
  }
}
