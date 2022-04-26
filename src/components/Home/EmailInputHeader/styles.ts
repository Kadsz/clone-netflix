import styled from "styled-components";

export const Container = styled.div`
  p {
    margin-top: 2rem;
    padding-bottom: 20px;
    font-size: 1.4rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;

  input {
    width: 550px;
    height: 70px;

    padding: 0 10px;
    font-size: 16px;

    outline: none;
  }

  button {
    background-color: #e50914;
    border-radius: 3px;

    color: #fff;

    padding: 7px 26px;

    font-size: 1.625rem;

    filter: brightness(0.9);

    :hover {
      filter: brightness(1);
    }
  }
`;
