import { Component, Input, OnInit } from '@angular/core';
import {LocalStore} from '../../LocalStore';
import { CommentService} from '../../services/comment.service';
import { Comment} from '../Models';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {

  @Input()
  feedbackId: string;
  text: string;

  constructor(private _commentService: CommentService) { }

  ngOnInit() {
  }


  sendComment() {

    const comment = new Comment();
    comment.text = this.text;
    comment.user = LocalStore.getCurrenUser();
    this._commentService.create(this.feedbackId, comment)
      .subscribe(newComment => {
        this.text = '';
      }, error => {
        console.log(error);
      });
  }

}
