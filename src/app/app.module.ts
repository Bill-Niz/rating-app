import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { RatingListComponentComponent } from './rating/rating-list-component/rating-list-component.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppContainerComponent } from './app-container/app-container.component';
import { ApplicationService } from './services/application.service';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationCardComponent } from './application/application-card/application-card.component';
import { ApplicationDetailsComponent } from './application/application-details/application-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingListComponentComponent,
    AppContainerComponent,
    ApplicationListComponent,
    ApplicationCardComponent,
    ApplicationDetailsComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
