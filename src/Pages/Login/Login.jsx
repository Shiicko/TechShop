import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as s from "./LoginStyled";

// eslint-disable-next-line react/prop-types
export const Login = ({ setAuth }) => {
  const initialState = {
    username: "",
    password: "",
  };
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      alert("Completa los datos");
      return;
    }

    setAuth(true);

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("username", form.username);

    navigate(`/username/${form.username}`);
  };

  return (
    <s.FormContainer>
      <s.Form onSubmit={handleSubmit}>
        <s.Title>Login</s.Title>
        <s.Input
          type="text"
          name="username"
          value={form.username}
          onChange={HandleChange}
          placeholder="Username"
        />
        <s.Input
          type="password"
          name="password"
          value={form.password}
          onChange={HandleChange}
          placeholder="Password"
        />
        <s.Button type="submit">Login</s.Button>
      </s.Form>
    </s.FormContainer>
  );
};
