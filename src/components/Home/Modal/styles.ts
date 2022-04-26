import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  border-bottom: 8px solid #222;
  padding: 70px 45px;
  color: #fff;
  text-align: center;

  > h1 {
    font-size: 3.125rem;
  }
`;

export const Content = styled.div`
  max-width: 782px;
  margin: 30px auto;
  text-align: left;
  margin-bottom: 80px;
`;

export const AccordionContainer = styled.div`
  padding: 1.2em;
  width: 100%;
  border-bottom: 1px solid #000;
  background: #303030;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  h1 {
    font-size: 30px;
    font-weight: 400;
  }
`;

interface SubtitleProps {
  open: any;
}

export const Subtitle = styled.div<SubtitleProps>`
  background: #303030;
  margin-bottom: 8px;
  padding: ${(props) => (props.open ? "1.2em" : "0px")};
  max-height: ${(props) => (props.open ? "9999px" : "0px")};
  overflow: hidden;
  height: auto;
  p {
    font-size: 20px;
    font-weight: 400;
  }
`;
