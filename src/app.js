import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home.js";

function App() {
  return (
    <Router basename="/FantasyExperiences">
      <Routes>
        <Route path="/home" element={<HomePage />} />

        {/* <Route path="/sobre" element={<AboutPage />} /> */}

        <Route path="/SimaoGui/FantasyExperiences" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>

    </Router>

  );
}

export default App;