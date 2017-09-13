import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../Models';
import * as moment from 'moment';
import {trigger, transition, style, animate} from '@angular/animations';
import { AppMessageService} from '../../services/messaging/app-message.service';
import { CommentService} from '../../services/comment.service';
import { Comment } from '../../comment/Models';
import {LocalStore} from "../../LocalStore";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  animations: [
    trigger('revealAnimation', [
      transition('* => fadeIn', [
        animate(500, style({ opacity: 1 }))
      ]),
      transition('* => fadeOut', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FeedbackComponent implements OnInit {

  @Input()
  feedback: Feedback;
  state = false;
  showInput = false;
  comments: Comment[];

  constructor(private _appMsgService: AppMessageService, private _commentService: CommentService) { }

  ngOnInit() {
  }

  timeAgo(date: Date) {
    return moment(date).fromNow();
  }

  fetchComments() {
    this.toggle();
    if (this.state) {
      this._commentService.get(this.feedback.comments)
        .subscribe( comments => {
          this._appMsgService.sendCommentReceive(comments);
          this.comments = comments;
        }, error => {
          console.log(error);
        });

    }else {
      this.comments = [];
    }
  }

  toggle() {
    this.state ? this.state = false : this.state = true;
  }

  toggleInput() {
    this.showInput ? this.showInput = false : this.showInput = true;
  }

}
