import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <main>
      <Router>
        <Landing />
      </Router>
    </main>
  );
}

export default App;
