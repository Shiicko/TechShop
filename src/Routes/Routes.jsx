import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Login } from "../Pages/Login/Login";
import { Username } from "../Pages/username/Username";
import { useState } from "react";
import { Navbar } from "../components/Header/Navbar";
import { AuthR } from "../Auth/AuthR";
import { LogAuthR } from "../Auth/LogAuthR";
import { Products } from "../Pages/Products/Products";
import { Categories } from "../Pages/Categorias/Categories";
import { ResultCategory } from "../Pages/Resultados/ResultCategory";
import Payment from "../components/Payment/Payment";
import Footer from "../components/Footer/Footer";

export const AppRoutes = () => {
  const [auth, setAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const handleLogout = () => {
    setAuth(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return (
    <BrowserRouter>
      <Navbar auth={auth} onLogout={handleLogout} />

      <ReactDomRoutes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <Categories />
              <ResultCategory />
            </>
          }
        />
        <Route path="productos" element={<ResultCategory />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="login"
          element={
            <LogAuthR auth={auth}>
              <Login setAuth={setAuth} />
            </LogAuthR>
          }
        />
        <Route
          path="username/:username"
          element={
            <AuthR auth={auth}>
              <Username />
            </AuthR>
          }
        />
        <Route path="payment" element={<Payment />} />
      </ReactDomRoutes>

      <Footer />
    </BrowserRouter>
  );
};
