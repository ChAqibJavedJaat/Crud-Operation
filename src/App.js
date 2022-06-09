import React from "react";
import Create from "./components/create/create";
import Read from "./components/read/read";
import Update from "./components/update/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h1>React Crud Operations</h1>
        <Create />
        <Read />
        <Update />
        <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} /> 
        </Routes>
      </div>
    </Router>
  );
}
