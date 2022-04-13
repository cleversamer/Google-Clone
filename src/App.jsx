import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/search/:searchTerm" element={<h1>Search</h1>} />
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="/not-found" element={<h1>Not Found</h1>} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
