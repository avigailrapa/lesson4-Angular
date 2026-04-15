import { Component, signal } from '@angular/core';
import { TestComponent } from './test/test.component';
import { TestFormComponent } from './test-form/test-form.component';
@Component({
  selector: 'app-root',
  imports: [TestComponent,TestFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson4');
}
