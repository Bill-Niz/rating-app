import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStore} from "../../LocalStore";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return !!this.getConnectedUser();
  }

  getConnectedUser() {
    return LocalStore.getCurrenUser();
  }

  logout() {
    LocalStore.logout();
    this.router.navigate(['/']);
  }

}
