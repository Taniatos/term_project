import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Traveling from "./components/HobbieOne/Traveling";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/traveling" element={<Traveling />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
