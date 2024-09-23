import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const AuthR = ({ auth, children }) => {
  return auth ? children : <Navigate to="/" replace />;
};
