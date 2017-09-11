import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _applicationService: ApplicationService) { }

  ngOnInit() {
    this._route.params.map(p => p.id)
    .switchMap(this.getApplicationDetails)
      .subscribe( app => {
        console.log(app);
      });
  }

  getApplicationDetails(id: string) {
    return Observable.of(this._applicationService.getApplication(id));
  }

}
