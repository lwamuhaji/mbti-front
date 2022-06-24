import { getSurvey } from 'apis';
import Answer from 'components/Answer';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ISurveyResponse } from 'types/db';

function ResultPage() {
  const { surveyId } = useParams();
  const { isLoading, isError, data, error } = useQuery<ISurveyResponse, Error>(['surveys', surveyId], getSurvey);

  return (
    <>
      {data?.responses.map((answersheet) => (
        <Answer data={data} answersheet={answersheet} />
      ))}
    </>
  );
}

export default ResultPage;
