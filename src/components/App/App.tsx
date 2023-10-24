import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme/theme";
import { TablesPage } from "../../pages/TablesPage";
// import { PrivateRoute } from "../../helpers/PrivateRoute";
import { RestrictedRoute } from "../../helpers/RestrictedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<RestrictedRoute redirectTo="/tables" component={LoginPage} />} />
        {/* <Route
          path="/tables"
          element={<PrivateRoute redirectTo="/" component={TablesPage} />}
        /> */}
         <Route
          path="/tables"
          element={<TablesPage/>}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
