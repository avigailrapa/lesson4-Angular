export class Question {
  question!: string;
  answers!: [string, string, string, string];
  correctAnswer!: number;
  id: string;

  constructor(question: string, answers: [string, string, string, string], correctAnswer: number) {
    this.id = crypto.randomUUID();
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

  correctnessCheck(answer: string) {
    return answer == this.answers[this.correctAnswer];
  }
}
