import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/observable/of';
import {Feedback} from '../feedback/Models';


@Injectable()
export class FeedbackService {


  private _create = AppSettings.API_ENDPOINT + '/feeback/application/';
  private _get = AppSettings.API_ENDPOINT + '/feedbacks';

  constructor(private _http: Http) { }


  create(appId: string, feedBack: Feedback) {
    return this._http.post(this._create + appId, feedBack)
      .map((res: Response) => res.json());
  }

  get(feedback: Feedback[]) {
    return this._http.get(this._get)
      .map((res: Response) => res.json());
  }

}
