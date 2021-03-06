//React

//Components
import { Header } from "../../components/Home/Header";
import { Cards } from "../../components/Home/Cards";
import { Modal } from "../../components/Home/Modal";
import { Footer } from "../../components/Home/Footer";

//Images
import ImageTv from "/images/cards/tv.png";
import ImageMobile from "/images/cards/mobile.jpg";
import ImageDevice from "/images/cards/device.png";
import ImageKids from "/images/cards/kids.png";

//Gsap

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
      <Modal />
      <Footer />
    </>
  );
};
