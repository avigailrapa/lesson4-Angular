import { Component } from '@angular/core';
import { Question } from '../models/question';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-test-form',
  imports: [FormsModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss',
})
export class TestFormComponent {
  questionText: string = '';
  answers: string[] = ['', '', '', ''];
  correctAnswer: number = 0;

  questions: Question[] = [];

  addQuestion() {
    const newQuestion = new Question(
      this.questionText,
      this.answers as [string, string, string, string],
      this.correctAnswer,
    );

    this.questions.push(newQuestion);
    console.log(this.questions);

    this.questionText = '';
    this.answers = ['', '', '', ''];
    this.correctAnswer = 0;
  }
}
