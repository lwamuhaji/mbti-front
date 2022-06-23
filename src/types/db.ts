export interface ISurvey {
  id: string;
  title: string;
  date: Date;
  questions: IQuestion[];
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
  date: Date;
  answerer: string;
  answers: IAnswers;
}

export interface ISurveyResponse extends ISurvey {
  responses: IAnswerSheet[];
}
