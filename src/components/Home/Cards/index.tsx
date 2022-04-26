//React
import { useEffect, useRef } from "react";

//Styles
import { Container, Background, Content } from "./styles";

//Gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CardProps {
  title: string;
  description: string;
  image: string;
  inverted?: boolean;
}

export const Cards: React.FC<CardProps> = (props) => {
  const opacityAnimation = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(opacityAnimation.current, {
      scrollTrigger: {
        trigger: opacityAnimation.current,
        end: "100%",
        scrub: 1,
        start: "center 75%",
        toggleActions: "restart pause reverse pause",
      },
      opacity: 0,
      duration: 4,
    });
  }, []);

  return (
    <Container>
      <Background ref={opacityAnimation} inverted={props.inverted}>
        <Content>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </Content>
        <img src={props.image} alt="Images dos Card" />
      </Background>
    </Container>
  );
};
