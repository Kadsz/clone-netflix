//React
import { SyntheticEvent, useState, useContext } from "react";

//Interfaces
import { EmailProps } from "../Header/interfaces";

//Styles
import { Container, FormContainer } from "./styles";

export const EmailInputHeader: React.FC = () => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const [email, setEmail] = useState<EmailProps>({
    value: "",
    error: false,
  });

  const sendForm = (e: SyntheticEvent) => {
    e.preventDefault();

    if (email.value.length <= 0 || !regEx.test(email.value)) {
      setEmail((prevState) => ({
        ...prevState,
        error: true,
      }));
    } else console.log("Email valido");
  };

  return (
    <Container>
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
    </Container>
  );
};
