import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styles';

function SharePage() {
  return (
    <Wrapper>
      <h1>질문지가 만들어졌습니다!</h1>
      <h2>아래 링크를 친구들에게 공유해주세요!</h2>
      <h3>
        <Link to="/surveys/123">link</Link> <button>링크 복사하기</button>
      </h3>
    </Wrapper>
  );
}

export default SharePage;
