export type options = 1 | 2 | 3 | 4 | 5 | 6;

export interface ISurvey {
  id: string;
  title: string;
  date: Date;
  questions: IQuestion[];
}

export interface IQuestion {
  id: string;
  statement: string;
}

export interface IAnswers {
  [question_id: string]: options;
}

export interface IAnswerSheet {
  id: number;
  survey_id: string; // foreign_key(uuid)
  date: Date;
  answerer: string;
  answers: IAnswers;
}

export interface ISurveyResponse extends ISurvey {
  responses: IAnswerSheet[];
}
