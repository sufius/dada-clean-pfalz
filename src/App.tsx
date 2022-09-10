import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LegalNotes from "./pages/LegalNotes";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = function () {
  return (
    <Router>
      <Routes>
        <Route path="/impressum" element={<LegalNotes />} /> 
        <Route path="/datenschutz" element={<PrivacyPolicy />} /> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
};

export default App;
