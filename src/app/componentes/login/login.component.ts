import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.auth.logIn(this.username, this.password)) {
      this.router.navigate(['galeria']);
    }
  }

}
