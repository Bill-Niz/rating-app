import { Component, Input, OnInit } from '@angular/core';
import {Feedback} from '../Models';
import * as moment from 'moment';



@Component({
  selector: 'app-my-feedback',
  templateUrl: './my-feedback.component.html',
  styleUrls: ['./my-feedback.component.css']
})
export class MyFeedbackComponent implements OnInit {

  @Input()
  feedback: Feedback;

  constructor() {

  }

  ngOnInit() {
  }


  timeAgo(date: Date) {
    return moment(date).fromNow();
  }

}
