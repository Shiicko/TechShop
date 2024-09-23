import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  padding: 10px;
  background-color: #000;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 50px;
  text-align: center;
  align-content: center;
`;

export const NavItem = styled(Link)`
  transition: border-color 0.3s ease;
  border-bottom: 1px solid transparent;
  color: white;
  &:hover {
    border-bottom-color: lightblue;
  }
`;

export const NavItemL = styled(NavItem)`
  margin-left: 50px;
`;
export const Carrito = styled.div`
  position: absolute;
  right: 4px;
  top: 9%;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  p {
    margin: 5px 0;
  }

  div {
    border-bottom: 1px solid black;
  }

  && img {
    height: 50px;
  }
`;
