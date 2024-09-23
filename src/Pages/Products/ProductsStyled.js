import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: white;
`;

export const h2Product = styled.h2`
  margin-bottom: 30px;
  background-color: orange;
  padding: 8px 16px;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  background-color: white;
`;

export const Card = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  background-color: black;
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
  background-color: #cebaff73;

  h3 {
    font-size: 16px;
    color: #333;
    margin: 0;
  }

  p {
    font-size: 15px;
    color: #666;
    margin: 4px 0;

    &:last-child {
      font-size: 14px;
      font-weight: bold;
      color: #333;
    }
  }
`;
export const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #e67e22;
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
  }
`;
