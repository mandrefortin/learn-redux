import NavBar from "./components/common/NavBar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import CartIcon from "./components/icons/CartIcon";
import { Button } from "@mui/material";

function App() {
  const increase = () => {};
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavBar>
          <CartIcon></CartIcon>
        </NavBar>
        <Button variant="outlined" onClick={increase} color="primary">
          Click
        </Button>
      </main>
    </ThemeProvider>
  );
}

export default App;
