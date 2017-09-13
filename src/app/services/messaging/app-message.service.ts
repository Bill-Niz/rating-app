import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Feedback } from '../../feedback/Models';
import { Comment } from '../../comment/Models';

@Injectable()
export class AppMessageService {
  private _feedBackReceived = new Subject<any>();
  private _commentReceived = new Subject<any>();

  constructor() { }

  sendFeedBackReceive(feedbacks: Feedback[]) {
    this._feedBackReceived.next({ feedbacks:  feedbacks });
  }

  getMessage(): Observable<any> {
    return this._feedBackReceived.asObservable();
  }

  sendCommentReceive(comments: Comment[]) {
    this._commentReceived.next({ feedbacks:  comments });
  }

}
