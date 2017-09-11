import { Component, Input, OnInit } from '@angular/core';
import { Application } from '../Models';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.css']
})
export class ApplicationCardComponent implements OnInit {

  @Input()
  application: Application;

  constructor() { }

  ngOnInit() {
  }

}
