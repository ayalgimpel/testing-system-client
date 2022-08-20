import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public questions: Question[] = [];

  constructor(
    private questionService: QuestionService
  ) { }

  async ngOnInit() {

    await this.questionService.get()
      .subscribe(questions => this.questions = questions);

  }

  async addQuestion(question: Question) {
    await this.questionService.create(question)
      .subscribe(createdQuestion => this.questions.push(createdQuestion))
  }

}
