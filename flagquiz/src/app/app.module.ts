import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlagQuizComponent } from './flag-quiz/flag-quiz.component';
import { FlagComponent } from './flag/flag.component';
import { QuizServiceComponent } from './quiz-service/quiz-service.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagQuizComponent,
    FlagComponent,
    QuizServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
