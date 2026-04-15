import { inject, Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  // private _questions: Question[] = [
  //   new Question(
  //     'What is the capital of Israel?',
  //     ['Tel Aviv', 'Jerusalem', 'Haifa', 'Eilat'] as [string, string, string, string],
  //     1,
  //   ),
  //   new Question('What is 2 + 2?', ['3', '4', '5', '6'] as [string, string, string, string], 1),
  //   new Question(
  //     'Which language is used for Angular?',
  //     ['Python', 'Java', 'TypeScript', 'C#'] as [string, string, string, string],
  //     2,
  //   ),
  //   new Question(
  //     'Which planet is closest to the Sun?',
  //     ['Earth', 'Mars', 'Mercury', 'Venus'] as [string, string, string, string],
  //     2,
  //   ),
  // ];
  private readonly baseURL = 'https://adi-teacher-api.onrender.com/quizzes';
  private readonly userURL = `${this.baseURL}?user=avigail`;
  private readonly http = inject(HttpClient);

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.userURL);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.baseURL, { ...question, user: 'avigail' });
  }
}
