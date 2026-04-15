import { Component, inject } from '@angular/core';
import { Question } from '../models/question';
import { FormsModule } from '@angular/forms';
import { TriviaService } from '../shared/trivia.service';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent {
  private readonly __triviaService = inject(TriviaService);

  newQuestion: Question = new Question('', ['', '', '', ''], 0);

  addQuestion() {
    this.__triviaService.addQuestion(this.newQuestion);
    this.newQuestion = new Question('', ['', '', '', ''], 0);
  }
}
