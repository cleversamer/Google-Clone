import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./components/not-found";

const App = () => {
  return (
    <Routes>
      <Route path="/search/:searchTerm" element={<h1>Search</h1>} />
      <Route path="/home" element={<Home />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};

export default App;
