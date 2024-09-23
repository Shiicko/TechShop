import styled from "styled-components";

export const HeroContainer = styled.div`
  background-image: url("/img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 92vh;
  display: flex;
  justify-content: space-around;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 25px;

  h1 {
    background-color: #000000a3;
    padding: 15px;
    border-radius: 10px;
  }
`;

export const btnDiv = styled.div`
  display: flex;
  justify-content: center;
`;
