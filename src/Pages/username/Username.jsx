import { useParams } from "react-router-dom";
import * as s from "./UsernameStyled";

export const Username = () => {
  const { username } = useParams();
  return (
    <s.Section>
      <s.Title>Bienvenido {username} </s.Title>
      <s.WelcomeMessage>
        Ponte al día con nuestras novedades...
      </s.WelcomeMessage>
      <s.CardsContainer>
        <s.Card>Card 1</s.Card>
        <s.Card>Card 2</s.Card>
        <s.Card>Card 3</s.Card>
      </s.CardsContainer>

      <s.CardsContainer>
        <s.Title>Ofertas solo para vos🔥🔥</s.Title>
      </s.CardsContainer>

      <s.CardsContainer>
        <s.Card>Hola</s.Card>
      </s.CardsContainer>
    </s.Section>
  );
};
