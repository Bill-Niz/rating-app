import { Injectable } from '@angular/core';
import {AppSettings} from '../AppSettings';
import { Http, Response, RequestOptions, Headers, } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Comment} from '../comment/Models';
import {LocalStore} from '../LocalStore';

@Injectable()
export class CommentService {

  private _create = AppSettings.API_ENDPOINT + '/comment/feedback/';
  private _get = AppSettings.API_ENDPOINT + '/comments';
  private _getNotation = AppSettings.API_ENDPOINT + '/comment/notation/';




  constructor(private _http: Http) { }

  create(feedbackId: string, comment: Comment) {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-api-key', LocalStore.getApiKey().token);
    const options = new RequestOptions({headers: headers});

    return this._http.post(this._create + feedbackId, comment,options)
      .map((res: Response) => res.json());
  }

  get(comments: Comment[]) {
    return this._http.post(this._get, comments)
      .map((res: Response) => res.json());
  }


  addNote(commentId: string, note: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    headers.append('x-api-key', LocalStore.getApiKey().token);
    const options = new RequestOptions({headers: headers});

    return this._http.post(this._getNotation + commentId, {notation: note}, options)
      .map((res: Response) => res.json());
  }

}
