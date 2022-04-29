import React from 'react';
import Question from 'components/Question';
import { CompleteButton, Footer, Header, QuestionWrapper } from './styles';

function TestLayout() {
  const onClickCompleteButton = () => {};

  return (
    <>
      <Header>
        <h1>친구가 보는 나.</h1>
      </Header>
      <main>
        <div style={{ margin: '0 auto', width: '1000px', height: '100px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', margin: '50px 0 20px 0' }}>친구가 당신에게 낸 문제를 풀어보세요!</div>
          <span>
            이 친구에 대해 얼마나 자세히 알고 계신가요? 친구가 낸 문제를 풀어보세요. 답한 내용은 아래의 별명과 함께
            전달됩니다.
          </span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span>친구에게 보여질 별명을 정해주세요:</span>
          <input placeholder="너의 베스트프랜드" />
        </div>
        <QuestionWrapper>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </QuestionWrapper>
        <CompleteButton onClick={onClickCompleteButton}>완료</CompleteButton>
      </main>
      <Footer>
        <div>footer</div>
      </Footer>
    </>
  );
}

export default TestLayout;
