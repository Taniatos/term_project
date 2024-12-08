import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import Traveling from "./components/HobbieOne/Traveling";
import BoardGames from "./components/HobbieTwo/BoardGames";
import Candles from "./components/HobbieThree/Candles";
import Movies from "./components/HobbieFour/Movies";
import Books from "./components/HobbieFive/Books";
import Music from "./components/HobbieSix/Music";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/traveling" element={<Traveling />} />
          <Route path="/boardgames" element={<BoardGames />} />
          <Route path="/candles" element={<Candles />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/music" element={<Music />} />
          <Route
            path="*"
            element={
              <div>
                <h1>
                  Ooops! Page Not found. <br />
                  <a href="/">Back to Home Screen</a>
                </h1>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
