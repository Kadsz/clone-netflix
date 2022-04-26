//React
import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

//Styles
import {
  Container,
  Content,
  AccordionContainer,
  TitleContainer,
  Subtitle,
} from "./styles";

//Data
import { data } from "./data";
import { EmailInputHeader } from "../EmailInputHeader";

export const Modal: React.FC = () => {
  const [active, setActive] = useState(null);

  const toggle = (index: any) => {
    if (active == index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <Container>
      <h1>Perguntas frequentes</h1>
      <Content>
        {data.map((item, index) => (
          <>
            <AccordionContainer>
              <TitleContainer onClick={() => toggle(index)}>
                <h1>{item.title}</h1>
                {active === index ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlinePlus size={30} />
                )}
              </TitleContainer>
            </AccordionContainer>
            <Subtitle open={active === index}>
              <p>{item.subtitle}</p>
            </Subtitle>
          </>
        ))}
      </Content>
      <EmailInputHeader />
    </Container>
  );
};
