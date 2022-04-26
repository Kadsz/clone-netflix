//Styles
import { Container, Navbar, Ul, SelectContainer, Content } from "./styles";

//Images
import { LogoNetflix } from "../../../utils/LogoNetflix";
import { EmailInputHeader } from "../EmailInputHeader";

export const Header: React.FC = () => {
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
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <EmailInputHeader />
      </Content>
    </Container>
  );
};
