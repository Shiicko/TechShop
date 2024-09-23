import * as s from "./FooterStyled";

const Footer = () => {
  return (
    <>
      <s.ServiciosWrapper>
        <s.Title>Nuestros Servicios</s.Title>
        <s.CardsContainer>
          <s.Card>
            <s.Icon src="/card.png" alt="Métodos de Pago" />
            <s.CardTitle>Métodos de Pago</s.CardTitle>
            <s.CardText>
              Aceptamos tarjetas de crédito, débito y transferencias bancarias.
            </s.CardText>
          </s.Card>

          <s.Card>
            <s.Icon src="/enviado.png" alt="Envíos" />
            <s.CardTitle>Envíos a Todo el País</s.CardTitle>
            <s.CardText>
              Hacemos envíos rápidos y seguros a todo el país.
            </s.CardText>
          </s.Card>

          <s.Card>
            <s.Icon src="/local.png" alt="Retiro en Local" />
            <s.CardTitle>Retiro en Local</s.CardTitle>
            <s.CardText>
              Puedes retirar tus productos directamente en nuestra tienda.
            </s.CardText>
          </s.Card>
        </s.CardsContainer>
      </s.ServiciosWrapper>

      <s.Footer>
        <s.FooterContainer>
          <s.FooterDescription>
            <p>
              Somos una tienda especializada en tecnología, ofreciendo productos
              de calidad para entusiastas y profesionales.
            </p>
          </s.FooterDescription>

          <s.FooterLinks>
            <a
              href="https://wa.me/543543300701"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/tu_tienda_pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/tu_tienda_pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </s.FooterLinks>

          <s.Divider />

          <s.Newsletter>
            <p>Suscríbete a nuestro boletín:</p>
            <s.Input type="email" placeholder="Ingresa tu correo" />
            <s.Button>Suscribirse</s.Button>
          </s.Newsletter>
        </s.FooterContainer>

        <s.FooterBottom>
          <p>© 2024 Tienda de PC. Todos los derechos reservados.</p>
        </s.FooterBottom>
      </s.Footer>
    </>
  );
};

export default Footer;
