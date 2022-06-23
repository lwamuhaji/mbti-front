import React, { useState } from 'react';
import { ButtonWrapper, Wrapper } from './styles';
import { IQuestion } from 'types/db';
import CreatedQuestion from 'components/CreatedQuestion';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function CreateSurveyPage() {
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post('/api/surveys/', questions, { withCredentials: true })
      .then((response) => {
        console.log(response.data.id);
        navigate(`/surveys/${response.data.id}/share`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createQuestion = () => {
    setQuestions(questions.concat({ id: count, statement: '' }));
    setCount(count + 1);
  };

  const deleteQuestion = (id: number) => {
    const result: IQuestion[] = [];
    questions.reduce((result, curr) => {
      if (curr.id !== id) {
        result.push(curr);
      }
      return result;
    }, result);
    setQuestions(result);
  };

  const changeStatement = (id: number, statement: string) => {
    const nextQuestions = questions?.map((question) => (question.id === id ? { ...question, statement } : question));
    setQuestions(nextQuestions);
  };

  return (
    <Wrapper>
      {questions?.map((question) => (
        <CreatedQuestion
          key={question.id}
          question={question}
          onClickDeleteButton={() => {
            deleteQuestion(question.id);
          }}
          onChangeStatement={(e: React.ChangeEvent<HTMLInputElement>) => {
            changeStatement(question.id, e.target.value);
          }}
        />
      ))}
      <ButtonWrapper>
        <button className="add-button" onClick={createQuestion}>
          추가하기
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
