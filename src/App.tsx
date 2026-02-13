import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/Landing";

import Main from "./pages/Home";

import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing-page" replace />} />

      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/home" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;