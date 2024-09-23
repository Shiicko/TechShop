import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "240px" : "0")};
  height: 100vh;
  background-color: #000000;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto; /* Permite el desplazamiento vertical */
  transition: width 0.3s ease;
  z-index: 1;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border: solid 2px;
  &:hover {
    background-color: #383838;
  }

  && img {
    height: 50px;
  }
`;

export const Icon = styled.div`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  background-color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Label = styled.div`
  font-size: 14px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: ${(props) => (props.isOpen ? "250px" : "10px")};
  background-color: #202020;
  color: white;
  border: none;
  cursor: pointer;
  transition: right 0.3s ease;
`;

export const CardsWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Footer = styled.div`
  padding: 10px;
  border-top: 1px solid #ddd;
  background: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Subtotal = styled.span`
  font-weight: bold;
`;

export const Total = styled.span`
  font-weight: bold;
  color: #d9534f;
`;

export const CheckoutButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c9302c;
  }
`;
