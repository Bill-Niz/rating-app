import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Location} from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import {Md5} from 'ts-md5/dist/md5';
import {LocalStore} from '../../../LocalStore';
import {User} from '../../Models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('input')
  private _inputElement: ElementRef;
  error = false;
  registerForm: FormGroup;
  user: User;
  constructor(private _fb: FormBuilder, private _router: Router, private _userService: UserService,private _location: Location) { }

  ngOnInit() {
    this.registerForm = this._fb.group({
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]]
    });

  }

  ngAfterViewInit() {
    this._inputElement.nativeElement.focus();
  }


  submit() {
    const { password, ...userData } = this.registerForm.value;
    userData.password = Md5.hashStr(password);
    this._userService.login(userData)
      .subscribe(user => {
        this.error = false;
        this.user = user as User;
        LocalStore.storeUser(this.user);
        this.navigateToHome();
      }, error => {
        this.error = true;
      });
  }

  navigateToHome() {
    this._location.back();
  }



}
