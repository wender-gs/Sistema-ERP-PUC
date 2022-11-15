import "./App.css";
import { Login } from "./pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { DisplayFinanceiro } from "./pages/DisplayFinanceiro";
import { DisplayProdutos } from "./pages/DisplayProdutos";
import { DisplayInsumos } from "./pages/DispalayInsumos";

export const App = () => {
  const routes = [
    {
      _id: 1,
      path: "/",
      element: <Login />,
    },
    {
      _id: 2,
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      _id: 3,
      path: "/DisplayFinanceiro",
      element: <DisplayFinanceiro />,
    },
    {
      _id: 4,
      path: "/DisplayProdutos",
      element: <DisplayProdutos />,
    },
    {
      _id: 5,
      path: "/DisplayInsumos",
      element: <DisplayInsumos />,
    },
  ];

  return (
    <Routes>
      {routes.map((r) => (
        <Route key={r._id} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};
