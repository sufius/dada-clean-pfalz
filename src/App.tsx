import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import LegalNotes from "./pages/LegalNotes";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <Router>
      <Route exact path="/impressum">
        <LegalNotes />
      </Route>
      <Route exact path="/datenschutz">
        <PrivacyPolicy />
      </Route>
      <Route exact path={"/"}>
        <Home />
      </Route>
    </Router>
  );
}
