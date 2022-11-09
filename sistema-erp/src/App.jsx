import "./App.css";
import { Login } from "./pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";

export const App = () => {
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ];

  return (
    <Routes>
      {routes.map((r) => (
        <Route path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};
