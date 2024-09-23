import { GlobalStyle } from "./styles/GlobalStyles";
import { AppRoutes } from "./Routes/Routes";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <>
      <Toaster richColors />
      <AppRoutes />
      <GlobalStyle />
    </>
  );
};
