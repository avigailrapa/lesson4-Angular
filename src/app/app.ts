import { Component, signal } from '@angular/core';
import { TestComponent } from './trivia-list/test.component';
import { TestFormComponent } from './question-form/test-form.component';
@Component({
  selector: 'app-root',
  imports: [TestComponent, TestFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('lesson4');
}
