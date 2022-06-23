import React from 'react';
import { IAnswerSheet, ISurveyResponse } from 'types/db';

interface Props {
  data: ISurveyResponse;
  answersheet: IAnswerSheet;
}

function Answer({ data, answersheet }: Props) {
  return (
    <div key={answersheet.id}>
      <div>{`${answersheet.answerer}님의 답변`}</div>
      <div>
        {Object.entries(answersheet.answers).map((answer, index) => (
          <div key={answer[0]}>{data.questions[index].statement + '//' + answer[1]}</div>
        ))}
      </div>
    </div>
  );
}

export default Answer;
