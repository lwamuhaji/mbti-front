import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h1 {
    font-size: 1.5rem;
    line-height: 3rem;
    margin: 50px 0;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    margin-bottom: 10px;
    width: 200px;
    height: 40px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;
