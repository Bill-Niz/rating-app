import { Injectable } from '@angular/core';
import {Application} from '../application/Models';

@Injectable()
export class ApplicationService {


  applications: Application[] = [
    new Application('1', 'ConnectMe', 'Description', 4, 'https://www.universetoday.com/wp-content/uploads/2015/12/cleanutlogo.png'),
    new Application('2', 'Crypto Messenger', 'Description', 3, 'http://images.sftcdn.net/images/t_optimized,f_auto/p/2315ddfa-a48f-11e6-abab-00163ed833e7/2366607054/free-app-lock-privacy-knight-logo.png')
  ];
  constructor() { }

  getApplications() {
    return this.applications;
  }

  getApplication(id: string) {
    return this.applications.find((app) => app.id === id);
  }

}
