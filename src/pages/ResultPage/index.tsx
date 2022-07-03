import { getSurvey } from 'apis';
import SurveyResult from 'components/SurveyResult';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ISurveyResponse } from 'types/db';
import { Wrapper } from './styles';

function ResultPage() {
  const { surveyId } = useParams();
  const { isLoading, isError, data, error } = useQuery<ISurveyResponse, Error>(['surveys', surveyId], getSurvey);

  if (data?.responses.length === 0) {
    return (
      <Wrapper>
        <div className="no-responses">아직 아무 답변이 없습니다.</div>;{' '}
      </Wrapper>
    );
  }

  return (
    <>
      {data?.responses.map((answersheet) => (
        <SurveyResult key={answersheet.id} data={data} answersheet={answersheet} />
      ))}
    </>
  );
}

export default ResultPage;
