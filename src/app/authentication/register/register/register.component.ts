import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  publicName: string;
  alreadyExist = false;
  registerForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router, private _userService: UserService) { }

  ngOnInit() {

    this.registerForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      image: ['', [Validators.required, Validators.maxLength(250), Validators.pattern(/^http/)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]]
    });
  }

  submit() {
    const { password, ...userData } = this.registerForm.value;
    userData.password = Md5.hashStr(password);
    this._userService.register(userData).subscribe(({ data }) => {
      this.alreadyExist = false;
      this.publicName = this.registerForm.get('name').value;
      this.navigateToHome();
    }, error => {
      this.alreadyExist = true;
    });
  }

  navigateToHome() {
    this._router.navigate(['/']);
  }


}
