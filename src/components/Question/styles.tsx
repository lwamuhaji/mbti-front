import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  text-align: center;
`;

export const Statement = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;
`;

export const Option = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 3px solid #2ecc71;
  &:hover {
    background: #2ecc71;
  }
  transition: 0.2s;
`;

export const DecisionWrapper = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Caption = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;
