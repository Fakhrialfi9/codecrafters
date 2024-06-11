import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserRoute from "../MainRoute/UserRoute/UserRoute.jsx";

function App() {
  return (
    <Router>
      <UserRoute />
    </Router>
  );
}

export default App;
