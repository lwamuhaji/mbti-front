import React, { useState } from 'react';
import { ButtonWrapper, Wrapper } from './styles';
import { IQuestion } from 'types/db';
import { surveyDefaultTemplate } from 'utils';
import CreatedQuestion from 'components/CreatedQuestion';
import axios from 'axios';
import { NavigationType, useNavigate } from 'react-router-dom';

function CreateSurveyPage() {
  const [questions, setQuestions] = useState<IQuestion[]>();
  const navigate = useNavigate();

  const loadDefaultTemplate = () => {
    setQuestions(surveyDefaultTemplate());
  };

  const onClickAddButton = () => {
    if (questions === undefined) {
      setQuestions([{ id: 1, statement: '' }]);
      return;
    }
    const newId = Math.max(...questions.map((questions) => questions.id)) + 1;
    setQuestions(questions.concat([{ id: newId, statement: '' }]));
  };

  const onSubmit = () => {
    axios
      .post('/api/surveys/', questions, { withCredentials: true })
      .then((response) => {
        console.log(response);
        navigate('/surveys/share');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onClickDeleteButton = (id: number) => {
    if (!questions) return;
    const index = questions.findIndex((questions) => questions.id === id);
    const newQuestion = questions?.slice(0, index).concat(questions?.slice(index + 1));
    setQuestions(newQuestion);
  };

  const onChangeStatement = (id: number, statement: string) => {
    const newQuestions = questions?.map((question) => {
      if (question.id === id) {
        question.statement = statement;
        return question;
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  return (
    <Wrapper>
      <h1>
        귀차니즘을 가진 여러분들을 위해 기본 템플릿을 제공합니다. <br />
        기본 템플릿 불러오기 버튼을 눌러서 기본적인 질문들을 추가해보세요. <br />
        추가된 질문들을 수정하고 삭제해서 자신만의 질문지를 만들 수 있습니다!
      </h1>
      {questions?.map((question) => (
        <CreatedQuestion
          key={question.id}
          question={question}
          onClickDeleteButton={() => {
            onClickDeleteButton(question.id);
          }}
          onChangeStatement={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeStatement(question.id, e.target.value);
          }}
        />
      ))}
      <ButtonWrapper>
        <button className="add-button" onClick={onClickAddButton}>
          추가하기
        </button>
        <br />
        <button className="load-button" onClick={loadDefaultTemplate}>
          기본 템플릿 불러오기
        </button>
        <br />
        <button className="submit-button" onClick={onSubmit}>
          완료!
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default CreateSurveyPage;
