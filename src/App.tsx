import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/Landing";

import Main from "./pages/Home";

import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />

      <Route path="/main" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;