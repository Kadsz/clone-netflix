//Components
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";

//Images
import ImageTv from "/images/cards/tv.png";
import ImageMobile from "/images/cards/mobile.jpg";
import ImageDevice from "/images/cards/device.png";
import ImageKids from "/images/cards/kids.png";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Cards
        title="Aproveite na TV."
        description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
        image={ImageTv}
      />
      <Cards
        inverted={true}
        title="Baixe séries para assistir offline."
        description="Salve seus títulos favoritos e sempre tenha algo para assistir."
        image={ImageMobile}
      />
      <Cards
        title="Assista quando quiser."
        description="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
        image={ImageDevice}
      />
      <Cards
        inverted={true}
        title="Crie perfis para crianças."
        description="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
        image={ImageKids}
      />
    </>
  );
};
