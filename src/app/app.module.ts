import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { SuiRatingModule } from 'ng2-semantic-ui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule} from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from 'ng2-scroll-to-el';

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
import { MyFeedbackComponent } from './feedback/my-feedback/my-feedback.component';
import { MakeFeedbackComponent } from './feedback/make-feedback/make-feedback.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './authentication/login/login/login.component';
import { RegisterComponent } from './authentication/register/register/register.component';
import {UserService} from './services/user.service';
import {FeedbackService} from './services/feedback.service';
import {CommentService} from './services/comment.service';
import {AppMessageService} from './services/messaging/app-message.service';
import { CommentInputComponent } from './comment/comment-input/comment-input.component';
import { LoginModalComponent } from './authentication/login-modal/login-modal.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

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
    FeedbackComponent,
    MyFeedbackComponent,
    MakeFeedbackComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CommentInputComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    SuiRatingModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    ScrollToModule.forRoot()
  ],
  providers: [ApplicationService, UserService, FeedbackService, CommentService,AppMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
