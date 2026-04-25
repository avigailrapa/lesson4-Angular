import { inject, Injectable, signal } from '@angular/core';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  private readonly baseURL = 'https://adi-teacher-api.onrender.com/quizzes?user=avigail';
  private readonly http = inject(HttpClient);

  private _questions = signal<Question[]>([]);

  get questions() {
    return this._questions.asReadonly();
  }

  constructor() {
    this.getAllQuestions().subscribe((list) => this._questions.set(list));
  }

  private getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.baseURL);
  }
  addQuestion(question: Question) {
    const { question: q, answers, correctAnswer } = question;
    this.http.post<Question>(this.baseURL, { question: q, answers, correctAnswer }).subscribe({
      next: (one) => {
        this._questions.update((oldQuestion) => [...oldQuestion, one]);
      },
      error: console.log,
    });
  }
}
