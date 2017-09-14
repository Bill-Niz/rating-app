import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../Models';
import {Feedback} from '../../feedback/Models';
import {AppMessageService} from '../../services/messaging/app-message.service';
import {LocalStore} from "../../LocalStore";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  application: Application;
  myFeedback?: Feedback;
  feedbacks: Feedback[];

  constructor(private _route: ActivatedRoute, private _applicationService: ApplicationService, private _appMsgService: AppMessageService) { }

  ngOnInit() {
    this._route.params.map(p => p.id)
    .switchMap(this.getApplicationDetails.bind(this))
      .subscribe( app => {
        this.application = app as Application;
        this.feedbacks = this.application.feedbacks;
        this._appMsgService.sendFeedBackReceive(this.feedbacks);
      });

    this._appMsgService.getFullFeedbacks()
      .subscribe( feedbacks => {
        const currUser = LocalStore.getCurrenUser();

        if (!!currUser) {
          const myfeed = feedbacks.feedbacks.filter((feedback) => { return feedback.user._id === currUser._id });
          if (myfeed.length > 0) { this.myFeedback = myfeed[0]; }
        }

      }, error => {
        console.log(error);
      });

    this._appMsgService.getNewFeedback()
      .subscribe(newFeedback => {
        this.pushNewFeedback(newFeedback.feedback);
      });
  }

  pushNewFeedback (feedback: Feedback) {
    this.myFeedback = feedback;
  }



  getApplicationDetails(id: string): Observable<Application> {
    return this._applicationService.getApplication(id);
  }

}