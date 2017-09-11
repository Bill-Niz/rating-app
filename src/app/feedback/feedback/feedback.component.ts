import { Component, Input, OnInit } from '@angular/core';
import {Feedback} from '../Models';
import * as moment from 'moment';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  @Input()
  feedback: Feedback;

  constructor() { }

  ngOnInit() {
  }

  timeAgo(date: Date){
    return moment(date).fromNow();
  }

}
