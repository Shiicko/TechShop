// src/components/ProductDetailStyled.js
import styled from "styled-components";

export const DetailContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 300px;
  height: auto;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: #000;
  text-align: center;
`;

export const CouponContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const ApplyButton = styled.button`
  margin-left: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const CouponInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;
