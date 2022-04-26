//React
import { useEffect, useRef } from "react";

//Styles
import { Container, Navbar, Ul, SelectContainer, Content } from "./styles";

//Images
import { LogoNetflix } from "../../../utils/LogoNetflix";
import { EmailInputHeader } from "../EmailInputHeader";

//Gsap
import { gsap } from "gsap";

export const Header: React.FC = () => {
  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(".h1", {
      y: -100,
      ease: "bounce",
    });
  }, []);

  return (
    <Container>
      <Navbar>
        <LogoNetflix />
        <Ul>
          <SelectContainer>
            <select>
              <option value="pt">Português</option>
              <option value="en">English</option>
            </select>
          </SelectContainer>
          <button>Entrar</button>
        </Ul>
      </Navbar>
      <Content>
        <h1 className="h1">Filmes, séries e muito mais. Sem limites.</h1>
        <h2 className="h2">Assista onde quiser. Cancele quando quiser.</h2>
        <EmailInputHeader />
      </Content>
    </Container>
  );
};
