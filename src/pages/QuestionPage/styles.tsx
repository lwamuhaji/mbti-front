import styled from 'styled-components';

export const Header = styled.div`
  margin: 0 auto;
  hegiht: 100px;
  text-align: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 50px;

  & :first-child {
    margin: 50px 0;
    font-size: 3rem;
  }
`;

export const QuestionWrapper = styled.div`
  & > div {
    margin: 80px 0 0 0;
  }
`;

export const CompleteButton = styled.button`
  display: block;
  border: none;
  font-size: 1.5rem;
  border-radius: 20px;
  padding: 10px 80px;
  margin: 50px auto;
`;

export const Option = styled.div<{ size?: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 3px solid;
  transition: 0.2s;
`;
