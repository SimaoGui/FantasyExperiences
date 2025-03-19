import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home.js";

function App() {
  return (
    <Router basename="/FantasyExperiences">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/sobre" element={<AboutPage />} /> */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
