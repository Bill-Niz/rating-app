import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import {Md5} from 'ts-md5/dist/md5';
import {LocalStore} from '../../../LocalStore';
import {User} from '../../Models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChild('input')
  private _inputElement: ElementRef;
  alreadyExist = false;
  registerForm: FormGroup;
  user: User;

  constructor(private _fb: FormBuilder, private _router: Router, private _userService: UserService) { }

  ngOnInit() {

    this.registerForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
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
    this._userService.register(userData)
      .subscribe(user => {
        this.alreadyExist = false;
        this.user = user as User;
        console.log(this.user);
        LocalStore.storeUser(this.user);
        this.navigateToHome();
      }, error => {
        this.alreadyExist = true;
      });
  }

  navigateToHome() {
    this._router.navigate(['/']);
  }


}
