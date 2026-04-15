import { Component, input } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  question = input.required<Question>();
}
