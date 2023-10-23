import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import { TablesPage } from "../../pages/TablesPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/tables" element={<TablesPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
