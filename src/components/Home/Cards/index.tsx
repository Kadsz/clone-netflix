//Styles
import { Container, Background, Content } from "./styles";

interface CardProps {
  title: string;
  description: string;
  image: string;
  inverted?: boolean;
}

export const Cards: React.FC<CardProps> = ({
  title,
  description,
  image,
  inverted,
}) => {
  return (
    <Container>
      <Background inverted={inverted}>
        <Content>
          <h1>{title}</h1>
          <p>{description}</p>
        </Content>
        <img src={image} alt="Images dos Card" />
      </Background>
    </Container>
  );
};
