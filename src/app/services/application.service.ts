import { Injectable } from '@angular/core';
import {Application} from '../application/Models';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApplicationService {

  private _getAllApplication = AppSettings.API_ENDPOINT + '/applications';
  private _getApplication = AppSettings.API_ENDPOINT + '/application/';

  applications: Application[] = [
    new Application('1', 'ConnectMe', 'Description', 4, 'https://www.universetoday.com/wp-content/uploads/2015/12/cleanutlogo.png'),
    new Application('2', 'Crypto Messenger', 'Description', 3, 'http://images.sftcdn.net/images/t_optimized,f_auto/p/2315ddfa-a48f-11e6-abab-00163ed833e7/2366607054/free-app-lock-privacy-knight-logo.png')
  ];
  constructor(private _http: Http) { }

  getApplications() {
    return this._http.get(this._getAllApplication)
      .map((res: Response) => res.json());
  }

  getApplication(id: string) {
    return this._http.get(this._getApplication + id)
      .map((res: Response) => res.json());
  }

}
