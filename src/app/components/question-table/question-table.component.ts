import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-table',
  templateUrl: './question-table.component.html',
  styleUrls: ['./question-table.component.scss']
})
export class QuestionTableComponent implements OnInit {

  @Input() questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
