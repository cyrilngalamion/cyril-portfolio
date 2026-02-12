import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/cyril-portfolio/landing" element={<HomePage />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Navigate to="/cyril-portfolio/landing" replace />} />
    </Routes>
  );
}

export default App;