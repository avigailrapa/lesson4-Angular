import { Component } from '@angular/core';
import { Question } from '../models/question';
import { QuestionComponent } from "../question/question.component";

@Component({
  selector: 'app-test',
  imports: [QuestionComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  myQuestion: Question = new Question(
    'What is the capital of Israel?',
    ['Tel Aviv', 'Haifa', 'Jerusalem', 'Elad'],
    2,
  );
}
