import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;