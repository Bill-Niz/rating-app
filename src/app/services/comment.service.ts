import { Injectable } from '@angular/core';
import {AppSettings} from '../AppSettings';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Comment} from '../comment/Models';

@Injectable()
export class CommentService {

  private _create = AppSettings.API_ENDPOINT + '/comment/feedback/';
  private _get = AppSettings.API_ENDPOINT + '/comments';


  constructor(private _http: Http) { }

  create(feedbackId: string, comment: Comment) {
    return this._http.post(this._create + feedbackId, comment)
      .map((res: Response) => res.json());
  }

  get(comments: Comment[]) {
    return this._http.get(this._get)
      .map((res: Response) => res.json());
  }

}
