import styled from 'styled-components';

export const Bar = styled.div`
  display: inline-block;
  width: 70%;
  height: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  overflow: hidden;
`;

type InnerBarProps = { percentage: number; reverse?: boolean };
export const InnerBar = styled.div<InnerBarProps>`
  height: 20px;
  width: ${(props) => props.percentage}%;
  background-color: gray;
  position: relative;
  left: ${(props) => (props.reverse ? 100 - props.percentage : 0)}%;
`;

export const Wrapper = styled.div`
  span {
    display: inline-block;
    font-size: 1.5rem;
    width: 20px;
    text-align: center;
    margin: 0 10px;
  }
`;
