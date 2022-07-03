import ResultBar from 'components/ResultBar';
import React from 'react';
import { IAnswerSheet, ISurveyResponse } from 'types/db';
import { scoreSurvey } from 'utils';
import { Wrapper } from './styles';

interface Props {
  data: ISurveyResponse;
  answersheet: IAnswerSheet;
}

function SurveyResult({ data, answersheet }: Props) {
  const score = scoreSurvey(answersheet.answers);

  return (
    <Wrapper>
      <span className="result title">{`${answersheet.answerer}님의 결과`}</span>
      <div className="bar-wrapper">
        <ResultBar score={score.E} type={['E', 'I']} />
        <ResultBar score={score.N} type={['N', 'S']} />
        <ResultBar score={score.F} type={['F', 'T']} />
        <ResultBar score={score.J} type={['J', 'P']} />
      </div>
      <span className="result detail">
        {(score.E > 0 ? 'E' : 'I') + (score.N > 0 ? 'N' : 'S') + (score.F > 0 ? 'F' : 'T') + (score.J > 0 ? 'J' : 'P')}
      </span>
    </Wrapper>
  );
}

export default SurveyResult;
