import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  publicName: string;
  alreadyExist = false;
  registerForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {

    this.registerForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      picture: ['', [Validators.required, Validators.maxLength(250), Validators.pattern(/^http/)]],
      email: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]]
    });
  }

  submit() {
    const { password, ...userData } = this.registerForm.value;

  }

  navigateToHome() {
    this._router.navigate(['/']);
  }


}
