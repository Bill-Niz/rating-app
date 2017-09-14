import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../Models';
import * as moment from 'moment';
import { CommentService } from '../../services/comment.service';
import {LocalStore} from '../../LocalStore';
import { Notation } from '../Models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;
  noted: Notation;

  constructor(private _commentService: CommentService) {

  }

  ngOnInit() {
    const currUser = LocalStore.getCurrenUser();
    console.log(this.comment);
    if (!!currUser && !!this.comment.notations) {
      console.log(this.comment);
      const myNote = this.comment.notations.filter((note) => {
        return note.user._id = currUser._id;
      });
      if (myNote.length > 0) { this.noted = myNote[0] as Notation; }
    }else {
      this.noted = null;
    }
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
