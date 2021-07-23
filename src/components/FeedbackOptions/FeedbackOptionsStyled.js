import styled from "styled-components";

const FeedbackOptionsStyled = styled.div`
  text-align: center;
  font-size: 20px;

  button {
    padding: 10px;
    border: 4px solid gray;
    border-radius: 0 20px 0 20px;
    font-weight: 500;
    background-color: transparent;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .good {
    &:hover {
      background-color: #76ba1b;
    }
  }

  .neutral {
    &:hover {
      background-color: #ffdfc4;
    }
  }

  .bad {
    &:hover {
      background-color: #ff483f;
    }
  }
`;

export default FeedbackOptionsStyled;
