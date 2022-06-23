import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles';

function CompletePage() {
  const navigate = useNavigate();

  const onClickCreateSurveyButton = () => {
    navigate('/surveys/create');
  };

  return (
    <Wrapper>
      <h1>결과가 친구에게 전달되었습니다.</h1>
      <h3>이제 자기만의 문제를 만들고 친구들에게 공유해보세요!</h3>
      <button onClick={onClickCreateSurveyButton}>내 문제 만들러 가기</button>
    </Wrapper>
  );
}

export default CompletePage;
