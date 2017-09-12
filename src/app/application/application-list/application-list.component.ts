import { Component, OnInit } from '@angular/core';
import { Application } from '../Models';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applicatations: Application[];

  constructor(private _applicatonList: ApplicationService) {
    this._applicatonList.getApplications().subscribe( data => {
      this.applicatations = data;
    });
  }

  ngOnInit() {
  }

}
