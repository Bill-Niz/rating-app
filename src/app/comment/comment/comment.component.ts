import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../Models';
import * as moment from 'moment';
import { CommentService } from '../../services/comment.service';
import {LocalStore} from '../../LocalStore';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor(private _commentService: CommentService) { }

  ngOnInit() {
  }

  timeAgo(date: Date) {
    return moment(date).fromNow();
  }

 anotate(note: number) {
    const user = LocalStore.getCurrenUser();
    if (!!user) {
      this._commentService.addNote(this.comment._id, note, user)
        .subscribe(response => {
          this.comment.notation += note;
        }, error => {
          console.log(error);
        });
    }
 }

}
