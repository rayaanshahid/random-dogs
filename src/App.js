import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DogGallery from "./home/DogGallery";
import Favorites from "./features/Favorites";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DogGallery />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default App;
