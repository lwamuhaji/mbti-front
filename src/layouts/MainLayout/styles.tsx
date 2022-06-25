import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  header {
    text-align: center;
    background-color: #fef9e7;
    padding: 5px;
    margin-bottom: 40px;

    h1 {
      text-shadow: 4px 4px 2px lightgray;
      font-size: 1.5rem;
    }
    span.friend {
      color: #2ecc71;
      font-size: 2rem;
    }
    span.see {
      color: #606060;
    }
    span.me {
      color: #3498db;
      font-size: 2rem;
    }
  }

  main {
    height: 100%;
  }

  footer {
    margin: 40px 0 0 0;
    padding: 8px;
    color: gray;
    font-size: 0.7rem;
    text-align: center;
    background-color: #fef9e7;
    width: 100%;
  }
`;
