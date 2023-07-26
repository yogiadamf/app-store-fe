import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Apps from "./pages/Apps/Apps";
import Gaming from "./pages/Gaming/Gaming";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>      
    </>
  );
}

export default App;
