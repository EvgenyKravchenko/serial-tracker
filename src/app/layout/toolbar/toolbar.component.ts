import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private userName: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser$()
      .subscribe(user => this.userName = user && user.name);
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
