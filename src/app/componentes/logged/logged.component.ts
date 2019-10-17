import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  username: string;
  constructor(private auth: AuthService) {
    this.username = this.auth.getUsername();
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logOut();
  }

}
