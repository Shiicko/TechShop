import * as s from "./HeroStyled";
import { Button } from "@mui/material";

export const Hero = () => {
  return (
    <s.HeroContainer>
      <s.HeroText>
        <h1>Bienvenido a nuestra tienda de tecnología</h1>
        <s.btnDiv>
          <Button variant="contained" color="success">
            Explorar productos
          </Button>
        </s.btnDiv>
      </s.HeroText>
    </s.HeroContainer>
  );
};
