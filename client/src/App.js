import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MortgageScreen from "./screens/MortgageScreen";

const App = () => {
  return (
    <Router>
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/mortgage" element={<MortgageScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
