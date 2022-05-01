import React, { useState } from 'react';
import Question from 'components/Question';
import { CompleteButton, Header, QuestionWrapper } from './styles';

interface IQuestion {
  id: number;
  statement: string;
}

function QuestionPage() {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState<IQuestion[]>([
    { id: 0, statement: 'Ut enim ad minim veniam.' },
    { id: 1, statement: 'Ut enim ad minim veniam.' },
    { id: 2, statement: 'Ut enim ad minim veniam.' },
  ]);

  const onClickOption = (question_id: number) => (option_id: number) => {
    setAnswers({ ...answers, [question_id]: option_id });
  };

  const onClickCompleteButton = () => {};

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
        {questions.map((v) => (
          <Question key={v.id} statement={v.statement} onClickOption={onClickOption(v.id)} />
        ))}
      </QuestionWrapper>
      <CompleteButton onClick={onClickCompleteButton}>완료</CompleteButton>
    </>
  );
}

export default QuestionPage;
