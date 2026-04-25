import { Component, signal } from '@angular/core';
import { Question } from '../models/question';
import { QuestionComponent } from '../question/question.component';
import { TriviaService } from '../shared/trivia.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-test',
  imports: [QuestionComponent, MatProgressSpinnerModule, MatDividerModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  constructor(public readonly realAPI: TriviaService) {}
}
