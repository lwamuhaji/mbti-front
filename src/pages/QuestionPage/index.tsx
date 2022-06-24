import React, { useEffect, useState } from 'react';
import Question from 'components/Question';
import { CompleteButton, Header, QuestionWrapper, Option, Wrapper } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSurvey } from 'apis';
import { IAnswers, ISurveyResponse, ISurvey } from 'types/db';
import axios from 'axios';
import { convertToDateFormat } from 'utils';

function QuestionPage() {
  const { surveyId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading: isSurveyLoading,
    isError: isSurveyError,
    data: surveyData,
    error: surveyError,
  } = useQuery<ISurvey | ISurveyResponse, Error>(['surveys', surveyId], getSurvey, {
    refetchOnWindowFocus: false,
  });
  const [answers, setAnswers] = useState<IAnswers>({});
  const [answerer, setAnswerer] = useState<string>('');

  useEffect(() => {
    if (surveyData && isIResponses(surveyData)) {
      navigate('share');
    }
  }, [surveyData, navigate]);

  const onClickOption = (question_id: number, option_id: number) => {
    setAnswers({ ...answers, [question_id]: option_id });
  };

  const onChangeAnswerer = (e: any) => {
    setAnswerer(e.target.value);
  };

  const isISurvey = (arg: any): arg is ISurvey => {
    return 'questions' in arg;
  };

  const isIResponses = (arg: any): arg is ISurveyResponse => {
    return 'responses' in arg;
  };

  const onClickCompleteButton = () => {
    if (isISurvey(surveyData) && Object.keys(answers).length !== surveyData?.questions.length) {
      alert('답변을 완료해주세요!');
      return;
    }

    // Get date
    const today = new Date();
    const date = convertToDateFormat(today);

    // Post answers
    axios
      .post(`/api/surveys/${surveyId}/answersheets`, { answerer, date, answers }, { withCredentials: true })
      .then((response) => {
        navigate('complete');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (isSurveyLoading) return <div>Loading</div>;

  if (isSurveyError) return <div>{surveyError.message}</div>;

  if (!isIResponses(surveyData) && isISurvey(surveyData)) {
    return (
      <Wrapper>
        <span>별명:</span>
        <input placeholder="너의 베스트프랜드" onChange={onChangeAnswerer} />
        <div>
          {surveyData?.questions.map((question) => (
            <Question key={question.id} statement={question.statement}>
              <div
                className={`option max agree ${answers[question.id] === 1 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 1)}
              ></div>
              <div
                className={`option mid agree ${answers[question.id] === 2 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 2)}
              ></div>
              <div
                className={`option min agree ${answers[question.id] === 3 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 3)}
              ></div>
              <div
                className={`option neutral ${answers[question.id] === 4 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 4)}
              ></div>
              <div
                className={`option min disagree ${answers[question.id] === 5 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 5)}
              ></div>
              <div
                className={`option mid disagree ${answers[question.id] === 6 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 6)}
              ></div>
              <div
                className={`option max disagree ${answers[question.id] === 7 ? 'checked' : ''}`}
                onClick={() => onClickOption(question.id, 7)}
              ></div>
            </Question>
          ))}
        </div>
        <CompleteButton onClick={onClickCompleteButton}>완료</CompleteButton>
      </Wrapper>
    );
  }

  return <div>Loading</div>;
}

export default QuestionPage;
