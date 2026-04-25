import { Component, input } from '@angular/core';
import { Question } from '../models/question';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  question = input.required<Question>();
  userFeedBack: boolean = false;

  check(userAnswer: string) {
    this.userFeedBack = this.question().answers[this.question().correctAnswer] == userAnswer;
  }
}
