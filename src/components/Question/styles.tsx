import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #888888;
    margin: 0 20px 10px 20px;
  }

  span {
    vertical-align: middle;
    margin: 0 10px;
    font-weight: bold;

    &.agree {
      color: #2ecc71;
    }

    &.disagree {
      color: #e74c3c;
    }
  }

  button {
    display: inline-block;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    vertical-align: middle;

    &.agree {
      border-color: #2ecc71;
      :hover {
        background: #2ecc71;
      }
      &.checked {
        background: #2ecc71;
      }
    }

    &.disagree {
      border-color: #e74c3c;
      :hover {
        background: #e74c3c;
      }
      &.checked {
        background: #e74c3c;
      }
    }
  }
`;
