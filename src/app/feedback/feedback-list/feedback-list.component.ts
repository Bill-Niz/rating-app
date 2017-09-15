import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {Feedback} from '../Models';
import { Subscription } from 'rxjs/Subscription';
import { AppMessageService } from '../../services/messaging/app-message.service';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit, OnDestroy {

  feedbacks: Feedback[];
  subscription: Subscription;

  constructor(private _appMsgService: AppMessageService, private _feedbackService: FeedbackService) {

    this.subscription = this._appMsgService.getFeedbacks()
      .switchMap(this.getFeedbacks.bind(this))
      .subscribe( feedbacks => {
       this.feedbacks = feedbacks as Feedback[];
       this._appMsgService.sendFullFeedBackReceive(this.feedbacks);
      } ,error => {
        console.log(error);
    });

    this._appMsgService.getNewFeedback()
      .subscribe(newFeedback => {
        this.pushNewFeedback(newFeedback.feedback);
      });
  }

  getFeedbacks(feedbacks: Feedback[]) {

    return this._feedbackService.get(feedbacks);
  }

  pushNewFeedback(feedback: Feedback) {
    this.feedbacks.unshift(feedback);
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
