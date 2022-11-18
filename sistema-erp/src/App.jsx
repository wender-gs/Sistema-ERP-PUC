import "./App.css";
import { Login } from "./pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { DisplayFinanceiro } from "./pages/DisplayFinanceiro";
import { DisplayProdutos } from "./pages/DisplayProdutos";
import { DisplayInsumos } from "./pages/DisplayInsumos";
import { DisplayDespesas} from "./pages/DisplayDespesas";
import { CadastroFinanceiro } from "./pages/CadastroFinanceiro";
import { CadastroProdutos } from "./pages/CadastroProdutos";
import { CadastroInsumos } from "./pages/CadastroInsumos";
import { CadastroDespesas } from "./pages/CadastroDespesas";



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
      path: "/displayfinanceiro",
      element: <DisplayFinanceiro />,
    },
    {
      _id: 4,
      path: "/displayprodutos",
      element: <DisplayProdutos />,
    },
    {
      _id: 5,
      path: "/displayinsumos",
      element: <DisplayInsumos />,
    },
    {
      _id: 6,
      path: "/displaydespesas",
      element: <DisplayDespesas />,
    },
    {
      _id: 7,
      path: "/financeiro/cadastro",
      element: <CadastroFinanceiro />,
    },
    {
      _id: 8,
      path: "/produtos/cadastro",
      element: <CadastroProdutos />,
    },
    {
      _id: 9,
      path: "/insumos/cadastro",
      element: <CadastroInsumos />,
    },
    {
      _id: 10,
      path: "/despesas/cadastro",
      element: <CadastroDespesas />,
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
