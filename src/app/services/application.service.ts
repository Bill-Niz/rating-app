import { Injectable } from '@angular/core';
import {Application} from '../application/Models';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/observable/of';


@Injectable()
export class ApplicationService {

  private _getAllApplication = AppSettings.API_ENDPOINT + '/applications';
  private _getApplication = AppSettings.API_ENDPOINT + '/application/';

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
