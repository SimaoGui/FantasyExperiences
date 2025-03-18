import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>

  );
}

export default App;