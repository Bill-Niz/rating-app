import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppContainerComponent} from '../app-container/app-container.component';
import {ApplicationListComponent} from '../application/application-list/application-list.component';
import { ApplicationDetailsComponent } from '../application/application-details/application-details.component';


const routes: Routes = [
  {
    path: '',
    component: AppContainerComponent,
    children:
      [
        {
          path: '',
          component: ApplicationListComponent,
          pathMatch: 'full',
        },
        {
          path: 'application/:id',
          component: ApplicationDetailsComponent,
          pathMatch: 'full'
        }
      ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
