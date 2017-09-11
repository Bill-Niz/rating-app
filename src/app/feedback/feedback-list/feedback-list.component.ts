import { Component, OnInit } from '@angular/core';
import {Feedback} from '../Models';
import { User } from '../../authentication/Models';
import {Comment} from '../../comment/Models';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks: Feedback[] = [
    new Feedback('1', 1, 'Bad ­ This application is crap'),
    new Feedback('1', 3, 'Good ­ (but) I would like to have a reduced loading time\n'),
    new Feedback('1', 2, 'Bad ­ This application is crap'),
    new Feedback('1', 5, 'Very Good ­ (but) I miss feature XYZ'),
    new Feedback('1', 3, 'Good ­ (but) The new version XYZ introduces bug ABC'),
  ];

  constructor() {
    this.feedbacks = this.feedbacks.map((feed) => {
      const u = new User('1', 'Willam', 'will@me.com');
      const c = new Comment('1', 'I dont agree', 3);
      c.user = u;
      feed.comments.push(c);
      feed.user = u;
      return feed;
    });
  }

  ngOnInit() {

  }

}
