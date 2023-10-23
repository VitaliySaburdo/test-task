import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
