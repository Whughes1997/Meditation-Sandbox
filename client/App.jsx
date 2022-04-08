import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Technique from "./pages/Technique.jsx";
import Landing from "./pages/landing.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Technique" element={<Technique/>} />
                <Route path="/Landing" element={<Landing/>} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;