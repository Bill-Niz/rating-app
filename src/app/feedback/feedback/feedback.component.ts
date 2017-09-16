import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Feedback } from '../Models';
import * as moment from 'moment';
import {trigger, transition, style, animate} from '@angular/animations';
import { AppMessageService} from '../../services/messaging/app-message.service';
import { CommentService} from '../../services/comment.service';
import { Comment } from '../../comment/Models';
import {LocalStore} from '../../LocalStore';
import {Router} from '@angular/router';
import { ScrollToService } from 'ng2-scroll-to-el';

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
  @ViewChild('inputTo')
  private _inputElement: ElementRef;
  state = false;
  comments = [];

  constructor(private _appMsgService: AppMessageService,
              private _commentService: CommentService,
              private _router: Router,
              private _scrollService: ScrollToService) {

    this._appMsgService.getNewComment()
      .subscribe(newComment => {
        this.pushNewComment(newComment.comment);
      });
  }

  ngOnInit() {
  }

  timeAgo(date: Date) {
    return moment(date).fromNow();
  }

  pushNewComment (comment: Comment) {

    if (comment.feedbackId === this.feedback._id) {
      this.feedback.comments.push(comment);
      this.fetchComments(false);
    }
  }

  fetchComments(toogle: boolean) {
    if (toogle) { this.toggle(); }
    if (this.state) {
      this._commentService.get(this.feedback.comments)
        .subscribe( comments => {
          this._appMsgService.sendCommentReceive(comments);
          this.comments = comments;
          if (this.isLogged()) {
            setTimeout(() => {
              const el: HTMLElement = this._inputElement.nativeElement;
              this._scrollService.scrollTo(el);
            }, 500);
          }
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

  isLogged() {
    return !!LocalStore.getCurrenUser();
  }
  toggleInput(toogle: boolean) {

    if (this.isLogged()) {
      this.fetchComments(toogle);
    }else {
      this._router.navigate(['/authentication/login']);
    }
  }

}
