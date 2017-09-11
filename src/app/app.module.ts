import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { SuiRatingModule } from 'ng2-semantic-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppContainerComponent } from './app-container/app-container.component';
import { ApplicationService } from './services/application.service';
import { ApplicationListComponent } from './application/application-list/application-list.component';
import { ApplicationCardComponent } from './application/application-card/application-card.component';
import { ApplicationDetailsComponent } from './application/application-details/application-details.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentComponent } from './comment/comment/comment.component';
import { FeedbackListComponent } from './feedback/feedback-list/feedback-list.component';
import { FeedbackComponent } from './feedback/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    ApplicationListComponent,
    ApplicationCardComponent,
    ApplicationDetailsComponent,
    CommentListComponent,
    CommentComponent,
    FeedbackListComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SuiRatingModule,
    AppRoutingModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
