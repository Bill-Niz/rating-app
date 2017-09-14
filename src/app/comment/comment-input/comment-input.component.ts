import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LocalStore} from '../../LocalStore';
import { CommentService} from '../../services/comment.service';
import { Comment} from '../Models';
import {AppMessageService} from '../../services/messaging/app-message.service';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit, AfterViewInit {

  @Input()
  feedbackId: string;
  @ViewChild('input')
  private _inputElement: ElementRef;
  text: string;

  constructor(private _appMsgService: AppMessageService, private _commentService: CommentService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._inputElement.nativeElement.focus();
  }


  sendComment() {

    const comment = new Comment();
    comment.text = this.text;
    comment.user = LocalStore.getCurrenUser();
    this._commentService.create(this.feedbackId, comment)
      .subscribe(newComment => {
        this._appMsgService.sendNewCommentReceive(newComment);
        this.text = '';
      }, error => {
        console.log(error);
      });
  }

}
