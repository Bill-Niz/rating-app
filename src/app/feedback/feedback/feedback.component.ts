import { Component, Input, OnInit } from '@angular/core';
import {Feedback} from '../Models';
import * as moment from 'moment';
import {trigger, transition, style, animate} from '@angular/animations';


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
  state = 'fadeOut';

  constructor() { }

  ngOnInit() {
  }

  timeAgo(date: Date){
    return moment(date).fromNow();
  }

  fadeIn() {
    this.state = 'fadeIn';
  }
  fadeOut() {
    this.state = 'fadeOut';
  }
  toggle() {
    this.state === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

}
