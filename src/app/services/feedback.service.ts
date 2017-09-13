import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../AppSettings';
import 'rxjs/add/observable/of';
import {Feedback} from '../feedback/Models';
import { LocalStore } from '../LocalStore';


@Injectable()
export class FeedbackService {


  private _create = AppSettings.API_ENDPOINT + '/feeback/application/';
  private _get = AppSettings.API_ENDPOINT + '/feedbacks';

  constructor(private _http: Http) { }


  create(appId: string, feedBack: Feedback) {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-api-key', LocalStore.getApiKey().token);
    const options = new RequestOptions({headers: headers});

    return this._http.post(this._create + appId, feedBack, options)
      .map((res: Response) => res.json());
  }

  get(feedbacks: any) {
    return this._http.post(this._get, feedbacks.feedbacks)
      .map((res: Response) => res.json());
  }

}
