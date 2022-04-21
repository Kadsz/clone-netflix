import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
`;

interface CardProps {
  inverted?: boolean;
}

export const Background = styled.div<CardProps>`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.inverted ? "row-reverse" : "row")};

  margin: 0 auto;

  color: #fff;

  img {
    width: 600px;
  }
`;

export const Content = styled.div`
  max-width: 595px;
  padding: 0 0 0 3rem;

  h1 {
    font-size: 3.125rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 20px;
    font-size: 1.625rem;
    font-weight: 400;
  }
`;
