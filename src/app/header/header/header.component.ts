import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _key = 'cp-public-name';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return !!this.getName();
  }

  getName() {
    return localStorage.getItem(this._key);
  }

  logout() {
    localStorage.removeItem(this._key);
    this.router.navigate(['/authentication/login'])
  }

}
