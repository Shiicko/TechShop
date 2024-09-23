import styled from "styled-components";

export const Section = styled.section`
  background-color: #020014b8;
  color: #fff;
  padding: 30px 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 200px;
  padding: 15px;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
