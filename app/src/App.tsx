import NavBar from "./components/common/NavBar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <NavBar />
      </main>
    </ThemeProvider>
  );
}

export default App;
