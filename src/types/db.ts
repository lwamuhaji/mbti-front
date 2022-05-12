export interface ISurvey {
  id: string;
  title: string;
  date: Date;
  questions: Array<IQuestion>;
}

export interface IQuestion {
  id: number;
  statement: string;
}

export interface IAnswers {
  [question_id: number]: number;
}

export interface IAnswerSheet {
  id: number;
  survey_id: string; // foreign_key(uuid)
  data: Date;
  answers: IAnswers;
}
