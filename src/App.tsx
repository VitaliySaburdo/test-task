import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route index element={< LoginPage/>} />
    </Routes>
  );
}

export default App;
