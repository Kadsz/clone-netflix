//React
import { SyntheticEvent, useState } from "react";

//Interfaces

import { EmailProps } from "./interfaces";

//Styles
import {
  Container,
  Navbar,
  Ul,
  SelectContainer,
  Content,
  FormContainer,
} from "./styles";

//Images
import { LogoNetflix } from "../../utils/LogoNetflix";

export const Header: React.FC = () => {
  const [email, setEmail] = useState<EmailProps>({
    value: "",
    error: false,
  });

  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const sendForm = (e: SyntheticEvent) => {
    e.preventDefault();

    if (email.value.length <= 0 || !regEx.test(email.value)) {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
      }));
    }
  };

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
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        <FormContainer onSubmit={sendForm} noValidate>
          <input
            type="email"
            value={email.value}
            placeholder="Email"
            required
            onChange={(e) =>
              setEmail({
                value: e.target.value,
                error: false,
              })
            }
          />
          <button>Vamos lá</button>
        </FormContainer>
        {email.error && <span>O email é obrigatório.</span>}
      </Content>
    </Container>
  );
};
