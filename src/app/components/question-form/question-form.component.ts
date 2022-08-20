import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Output() onAddQuestion: EventEmitter<Question> = new EventEmitter<Question>();

  public question: Question = { id: '', title: '' };
  public errors: { title: string } | null = { title: '' };

  constructor() { }

  ngOnInit(): void {

  }

  private validate(): { title: string } | null {
    const errors: { title: string } = { title: '' };
    if (this.question.title.trim() === "") errors.title = "Title is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  onSubmit(e: Event) {

    e.preventDefault();
    
    this.errors = this.validate();
    if (this.errors === null)
      return;

    const newQuestion: Question = { title: this.question.title, id: '' };

    if (this.errors !== null)
      this.errors.title = '';

    this.onAddQuestion.emit(newQuestion);
  }

  handleChange(value: string) {
    console.log(value);
    this.question.title = value;

    if (this.errors !== null)
      this.errors.title = '';
  }

}
