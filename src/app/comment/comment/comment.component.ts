import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../Models';
import * as moment from 'moment';
import { CommentService } from '../../services/comment.service';
import {LocalStore} from '../../LocalStore';
import { Notation } from '../Models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;
  noted: Notation;
  showed = true;

  constructor(private _commentService: CommentService, private _router: Router) {

  }

  ngOnInit() {
    const currUser = LocalStore.getCurrenUser();

    if (!!currUser) { this.showed = !(this.comment.user._id === currUser._id);
    }else {
      this.showed = true;
    }

    if (!!currUser && !!this.comment.notations) {

      const myNote = this.comment.notations.filter((note) =>  note.user._id === currUser._id);
      if (myNote.length > 0) { this.noted = myNote[0] as Notation; this.showed = false; }
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
          this.showed = false;
        }, error => {
          console.log(error);
        });
    }else {
      this._router.navigate(['/authentication/login']);
    }
 }

}
