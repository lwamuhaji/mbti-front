import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: black;
    font-size: 1.2rem;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px gray;
    margin: 10px 0;
  }

  button {
    font-size: 1.2rem;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px gray;
    border: none;
    margin: 10px 0;
  }
`;
