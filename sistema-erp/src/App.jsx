import React, { useContext } from "react";
import { DisplayContext } from "./contexts/DisplayContext";
import "./App.css";
import { Login } from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { DisplayFinanceiroCompras } from "./pages/DisplayFinanceiroCompras";
import { DisplayProdutos } from "./pages/DisplayProdutos";
import { DisplayInsumos } from "./pages/DisplayInsumos";
import { DisplayFinanceiroDespesas } from "./pages/DisplayFinanceiroDespesas";
import { CadastroFinanceiroCompras } from "./pages/CadastroFinanceiroCompras";
import { CadastroProdutos } from "./pages/CadastroProdutos";
import { CadastroInsumos } from "./pages/CadastroInsumos";
import { CadastroFinanceiroDespesas } from "./pages/CadastroFinanceiroDespesas";

export const App = () => {
  const valor = useContext(DisplayContext);
  console.log("Aquiiii Context", valor);
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
      path: "/displayfinanceirocompras",
      element: <DisplayFinanceiroCompras />,
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
      path: "/displayfinanceirodespesas",
      element: <DisplayFinanceiroDespesas />,
    },
    {
      _id: 7,
      path: "/financeiro/compras/cadastro",
      element: <CadastroFinanceiroCompras />,
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
      path: "/financeiro/despesas/cadastro",
      element: <CadastroFinanceiroDespesas />,
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
