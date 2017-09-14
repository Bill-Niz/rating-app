import {Component, Input, OnInit} from '@angular/core';
import { FeedbackService} from '../../services/feedback.service';
import { Feedback} from '../Models';
import { LocalStore } from '../../LocalStore';
import { IPopup } from 'ng2-semantic-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-feedback',
  templateUrl: './make-feedback.component.html',
  styleUrls: ['./make-feedback.component.css']
})
export class MakeFeedbackComponent implements OnInit {

  @Input()
  appId: string;
  popUp: IPopup;
  rating = 0;
  note: string;


  constructor(private _feedbackService: FeedbackService, private _router: Router) { }

  ngOnInit() {
  }

  public openPopup(popup: IPopup) {

    if (!!LocalStore.getCurrenUser()) {
      this.popUp = popup;
      popup.toggle();
    }else {
      this._router.navigate(['/authentication/login']);
    }
  }

  sendFeedback() {

    const feedback = new Feedback();
    feedback.date = new Date();
    feedback.rating = this.rating;
    if (this.note) { feedback.note = this.note; }
    feedback.user = LocalStore.getCurrenUser();
    this._feedbackService.create(this.appId, feedback)
      .subscribe(newFeedback => {
        this.popUp.close();
      }, error => {
        console.log(error);
      });

  }
}
