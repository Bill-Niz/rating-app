import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-feedback',
  templateUrl: './make-feedback.component.html',
  styleUrls: ['./make-feedback.component.css']
})
export class MakeFeedbackComponent implements OnInit {

  rating: Number = 0;
  note: string;

  constructor() { }

  ngOnInit() {
  }

  sendFeedback(){

  }

}
