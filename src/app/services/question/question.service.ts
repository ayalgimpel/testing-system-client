import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private serverRoute = `${environment.apiEndpoint}/api/Questions`;

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get<Question[]>(`${this.serverRoute}/getQuestions`);
  }

  create(question: Question) {
    return this.http.post<Question>(`${this.serverRoute}/addQuestion`, question)
  }
}
