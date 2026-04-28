import { Component, signal } from '@angular/core';
import { TestComponent } from './trivia/test.component';
import { QuestionTemplateFormComponent } from './question-template-form/question-template-form.component';
@Component({
  selector: 'app-root',
  imports: [TestComponent, QuestionTemplateFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('lesson4');
}
