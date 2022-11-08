import "./App.css";
import { Login } from "./pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
