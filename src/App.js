import React from "react";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";

export default function App() {
  return (
    <Router>
      <div className="container">
        <TopBar/>
        <h1>React Crud Operations</h1>
       <Routes>
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/" element={<Read />} />
          <Route path="/edit/:id" element={<Create />} /> 
        </Routes> 
      </div>
    </Router>
  );
}
