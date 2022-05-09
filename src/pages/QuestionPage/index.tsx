import React, { useState } from 'react';
import Question from 'components/Question';
import { CompleteButton, Header, QuestionWrapper, Option } from './styles';
import { useParams } from 'react-router-dom';

interface IQuestion {
  id: number;
  statement: string;
}

interface IAnswers {
  [question_id: number]: number;
}

function QuestionPage() {
  const a = useParams();
  const [answers, setAnswers] = useState<IAnswers>({});
  const [questions, setQuestions] = useState<IQuestion[]>([
    { id: 0, statement: 'Ut enim ad minim veniam.' },
    { id: 1, statement: 'Ut enim ad minim veniam.' },
    { id: 2, statement: 'Ut enim ad minim veniam.' },
  ]);

  const onClickOption = (question_id: number, option_id: number) => {
    setAnswers({ ...answers, [question_id]: option_id });
  };

  const onClickCompleteButton = () => {
    // Check if the answers of the questions are all set.
    if (Object.keys(answers).length !== questions.length) return;
  };

  return (
    <>
      <Header>
        <p>친구가 당신에게 낸 문제를 풀어보세요!</p>
        <p>
          이 친구에 대해 얼마나 자세히 알고 계신가요? 친구가 낸 문제를 풀어보세요. 답한 내용은 아래의 별명과 함께
          전달됩니다.
        </p>
        <span>친구에게 보여질 별명을 정해주세요:</span>
        <input placeholder="너의 베스트프랜드" />
      </Header>
      <QuestionWrapper>
        {questions.map((question) => (
          <Question key={question.id} statement={question.statement}>
            <Option
              className={`max agree ${answers[question.id] === 0 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 0)}
            ></Option>
            <Option
              className={`mid agree ${answers[question.id] === 1 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 1)}
            ></Option>
            <Option
              className={`min agree ${answers[question.id] === 2 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 2)}
            ></Option>
            <Option
              className={`neutral ${answers[question.id] === 3 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 3)}
            ></Option>
            <Option
              className={`min disagree ${answers[question.id] === 4 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 4)}
            ></Option>
            <Option
              className={`mid disagree ${answers[question.id] === 5 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 5)}
            ></Option>
            <Option
              className={`max disagree ${answers[question.id] === 6 ? 'checked' : ''}`}
              onClick={() => onClickOption(question.id, 6)}
            ></Option>
          </Question>
        ))}
      </QuestionWrapper>
      <CompleteButton onClick={onClickCompleteButton}>완료</CompleteButton>
    </>
  );
}

export default QuestionPage;
