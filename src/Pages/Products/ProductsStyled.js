import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: rgb(0, 0, 0);
`;

export const h2Product = styled.h2`
  margin-bottom: 30px;
  background-color: #1976d2;
  padding: 8px 16px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  background-color: rgb(0, 0, 0);
`;

export const Card = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(25, 118, 210, 0.25);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  background-color: #f0f4f8;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  background-color: #f9fcff;

  h3 {
    font-size: 16px;
    color: #1e1e2f;
    margin: 0;
  }

  p {
    font-size: 15px;
    color: #4f5b62;
    margin: 4px 0;

    &:last-child {
      font-size: 14px;
      font-weight: bold;
      color: #263238;
    }
  }
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
  margin: 8px 0 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 6px;
  width: 100%;
  justify-content: center;
  margin-top: 8px;

  button {
    flex: 1;
    font-size: 12px;
    padding: 4px 8px;
    background-color: #1976d2;
    color: #ffffff;
    border-radius: 6px;

    &:hover {
      background-color: #1565c0;
    }
  }
`;
