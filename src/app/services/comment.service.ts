import { Injectable } from '@angular/core';
import {AppSettings} from '../AppSettings';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class CommentService {

  private _create = AppSettings.API_ENDPOINT + '/comment/feedback/';

  constructor(private _http: Http) { }

  create(feedbackId: string, comment: Comment) {
    return this._http.post(this._create + feedbackId, comment)
      .map((res: Response) => res.json());
  }

}
