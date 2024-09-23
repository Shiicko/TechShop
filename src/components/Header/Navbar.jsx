import * as s from "./HeaderStyled";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useState } from "react";
import { SideBar } from "../Sidebar/SideBar";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ auth, onLogout }) => {
  const YourUser = localStorage.getItem("username");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <s.HeaderContainer>
      <s.Nav>
        <li key="inicio">
          <s.NavItem to="/">Inicio</s.NavItem>
        </li>
        <li key="productos">
          <s.NavItem to="/productos">Productos</s.NavItem>
        </li>
        <li key="noticias">
          <s.NavItem to="/Noticias">Servicios</s.NavItem>
        </li>
        <li key="cart">
          <s.NavItem onClick={toggleSidebar}>
            <FaShoppingCart />
          </s.NavItem>
        </li>
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <li key="auth">
          {auth ? (
            <>
              <s.NavItem to={`/username/${YourUser}`}>
                <CgProfile />
              </s.NavItem>
              <s.NavItemL onClick={onLogout}>
                <CiLogout />
              </s.NavItemL>
            </>
          ) : (
            <s.NavItem to="/login">
              <CiLogin />
            </s.NavItem>
          )}
        </li>
      </s.Nav>
    </s.HeaderContainer>
  );
};
