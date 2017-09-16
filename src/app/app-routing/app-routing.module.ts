import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppContainerComponent} from '../app-container/app-container.component';
import {ApplicationListComponent} from '../application/application-list/application-list.component';
import { ApplicationDetailsComponent } from '../application/application-details/application-details.component';
import {RegisterComponent} from '../authentication/register/register/register.component';
import {LoginComponent} from '../authentication/login/login/login.component';
import {NotFoundComponent} from '../error/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'authentication/login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'authentication/register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
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
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404',  pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
