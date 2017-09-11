import { Injectable } from '@angular/core';
import {Application} from '../application/Models';

@Injectable()
export class ApplicationService {

  applications: Application[] = [
    new Application('1', 'ConnectMe', 'Description', 'https://www.mozilla.org/media/img/firefox/products/focus/feature-focus-fast.cff8c1bbafc2.png'),
    new Application('2', 'Crypto Messenger', 'Description', 'http://is3.mzstatic.com/image/thumb/Purple118/v4/5d/15/33/5d15338e-d6bf-be9d-04e6-fc00bcbd9f8f/source/1200x630bb.jpg')
  ];
  constructor() { }

  getApplications() {
    return this.applications;
  }

  getApplication(id: string) {
    return this.applications.find((app) => app.id === id);
  }

}
