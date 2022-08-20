import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './pages/main/question/question.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { QuestionTableComponent } from './components/question-table/question-table.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LoginComponent,
    QuestionTableComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
