import styled from "styled-components";

export const DetailContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1e1e2f;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 255, 255, 0.2);
  z-index: 1000;
  max-width: 350px;
  height: auto;
  overflow-y: auto;
  color: #e0f2f1;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ffffff;
  align-self: flex-end;

  &:hover {
    color: #00e5ff;
  }
`;

export const Image = styled.img`
  width: 85%;
  height: auto;
  margin: 0 auto 15px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.1);
`;

export const Price = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #64ffda;
  text-align: center;
  margin: 12px 0 16px;
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
  background-color: #00bcd4;
  color: #ffffff;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 188, 212, 0.3);

  &:hover {
    background-color: #0097a7;
  }
`;

export const CouponInput = styled.input`
  padding: 8px;
  border: 1px solid #00bcd4;
  border-radius: 6px;
  background-color: #2c2f3a;
  color: #ffffff;
  flex: 1;

  &::placeholder {
    color: #90a4ae;
  }
`;

// Tipografía y detalles refinados
export const GlobalStyleOverrides = styled.div`
  h2 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    margin: 12px 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: #cfd8dc;
    margin-bottom: 12px;
    line-height: 1.5;
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 15px;

    li {
      font-size: 0.95rem;
      color: #b0bec5;
      margin-bottom: 8px;
      line-height: 1.4;
      padding-left: 1rem;
      position: relative;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: #00e5ff;
        font-size: 1.1rem;
      }

      strong {
        color: #64ffda;
      }
    }
  }
`;
