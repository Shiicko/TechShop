import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const LogAuthR = ({ auth, children }) => {
  return auth ? <Navigate to="/" replace /> : children;
};
