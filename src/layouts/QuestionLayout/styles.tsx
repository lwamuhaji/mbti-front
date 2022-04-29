import styled from 'styled-components';

export const Header = styled.header`
  border: solid;
  border-width: 1px;
  height: 100px;
`;

export const QuestionWrapper = styled.div`
  & > div {
    margin: 100px 0;
  }
`;

export const CompleteButton = styled.button`
  display: block;
  border: none;
  font-size: 2rem;
  border-radius: 20px;
  padding: 20px 100px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  border-top: 1px solid black;
  text-align: center;
`;
