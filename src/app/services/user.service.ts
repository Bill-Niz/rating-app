import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/observable/of';
import {User} from '../authentication/Models';

@Injectable()
export class UserService {

  private _login = AppSettings.API_ENDPOINT + '/login';
  private _register = AppSettings.API_ENDPOINT + '/register';

  constructor(private _http: Http) { }

  login(user: User) {
    return this._http.post(this._login, user)
      .map((res: Response) => res.json());
  }

  register(user: User) {
    return this._http.post(this._register, user)
      .map((res: Response) => res.json());
  }

}
