import { Component, inject } from '@angular/core';
import { TriviaService } from '../shared/trivia.service';
import { Question } from '../models/question';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-question-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './question-template-form.component.html',
  styleUrl: './question-template-form.component.scss',
})
export class QuestionTemplateFormComponent {
  private readonly _questionService = inject(TriviaService);
  newQuestion: Question = new Question('', ['', '', '', ''], 1);

  addQuestion() {
    this.newQuestion.correctAnswer = Number(this.newQuestion.correctAnswer) - 1;
    this._questionService.addQuestion(this.newQuestion);
    this.newQuestion = new Question('', ['', '', '', ''], 1);
  }
}
