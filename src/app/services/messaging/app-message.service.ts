import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Feedback } from '../../feedback/Models';
import { Comment } from '../../comment/Models';

@Injectable()
export class AppMessageService {
  private _feedBackReceived = new Subject<any>();
  private _commentReceived = new Subject<any>();
  private _fullFeedBackReceived = new Subject<any>();

  private _newCommentReceived = new Subject<any>();
  private _newFeedbackReceived = new Subject<any>();

  constructor() { }

  sendFeedBackReceive(feedbacks: Feedback[]) {
    this._feedBackReceived.next({ feedbacks:  feedbacks });
  }

  getFeedbacks(): Observable<any> {
    return this._feedBackReceived.asObservable();
  }


  sendNewFeedBackReceive(feedback: Feedback) {
    this._newFeedbackReceived.next({  feedback });
  }

  getNewFeedback(): Observable<any> {
    return this._newFeedbackReceived.asObservable();
  }


  sendNewCommentReceive(comment: Comment) {
    this._newCommentReceived.next({  comment });
  }

  getNewComment(): Observable<any> {
    return this._newCommentReceived.asObservable();
  }


  sendFullFeedBackReceive(feedbacks: Feedback[]) {
    this._fullFeedBackReceived.next({ feedbacks:  feedbacks });
  }

  getFullFeedbacks(): Observable<any> {
    return this._fullFeedBackReceived.asObservable();
  }

  sendCommentReceive(comments: Comment[]) {
    this._commentReceived.next({ feedbacks:  comments });
  }

}
