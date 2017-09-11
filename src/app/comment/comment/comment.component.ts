import { Component, Input, OnInit } from '@angular/core';
import {Comment} from '../Models';
import * as moment from 'moment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

  timeAgo(date: Date){
    return moment(date).fromNow();
  }

}
