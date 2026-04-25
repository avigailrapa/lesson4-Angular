import { Component, inject } from '@angular/core';
import { Question } from '../models/question';
import { FormsModule } from '@angular/forms';
import { TriviaService } from '../shared/trivia.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-test-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent {
  private readonly __triviaService = inject(TriviaService);

  newQuestion: Question = new Question('', ['', '', '', ''], 1);

  addQuestion() {
    this.newQuestion.correctAnswer -= 1;
    this.__triviaService.addQuestion(this.newQuestion as Question);
    this.newQuestion = new Question('', ['', '', '', ''], 1);
  }
}
