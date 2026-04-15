import { Component } from '@angular/core';
import { Question } from '../models/question';
import { QuestionComponent } from '../question/question.component';
import { TriviaService } from '../shared/trivia.service';

@Component({
  selector: 'app-test',
  imports: [QuestionComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  list?: Question[];
  constructor(private readonly realAPI: TriviaService) {
    this.refreshQuestions();
  }
  refreshQuestions() {
    this.realAPI.getAllQuestions().subscribe({
      next: (questionList) => {
        this.list = questionList;
      },
      error: (err) => alert(err.message),
    });
  }
}
