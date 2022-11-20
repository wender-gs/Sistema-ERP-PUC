import { useContext } from "react";
import { Link } from "react-router-dom";
import { DisplayContext } from "../../contexts/DisplayContext";
import "./index.css";

export const Sidebar = ({ title, display, page }) => {
  const { displayTrueorFalse, setdisplayTrueorFalse } =
    useContext(DisplayContext);

  const pathname = window.location.pathname;

  return (
    <>
      <header>
        <div className="d-flex ms-3 align-items-center">
          <input
            type="checkbox"
            id="check"
            onClick={() =>
              displayTrueorFalse == false
                ? setdisplayTrueorFalse(true)
                : setdisplayTrueorFalse(false)
            }
          />
          <label
            id="icone"
            htmlFor="check"
            className={`${display && "d-none"}`}
          ></label>
          <h1
            className={`${
              display ? "ml mt-4" : "mt-2 ps-3 text-capitalize d-inline-block"
            }`}
          >
            {title}
          </h1>
          <div
            className={`${
              page === "dash"
                ? "d-none"
                : "user-icon w-100 d-flex justify-content-end pe-3 mt-4"
            }`}
          >
            <img
              className="bg-white rounded-circle p-2"
              src="/images/user-icon.svg"
              alt=""
            />
          </div>
          <div className={`barra ${display && "block"}`}>
            <nav>
              <ul className="nav-menu">
                <li className="logo">
                  <span className="fs-2">LOGO </span>
                </li>
                <li className={`${pathname === "/dashboard" ? "active" : ""}`}>
                  <Link
                    to="/dashboard"
                    onClick={() =>
                      displayTrueorFalse == false
                        ? setdisplayTrueorFalse(true)
                        : setdisplayTrueorFalse(false)
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayfinanceirocompras" ||
                    pathname === "/financeiro/compras/cadastro" ||
                    pathname === "/displayfinanceirodespesas" ||
                    pathname === "/financeiro/despesas/cadastro"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/displayfinanceirocompras">Financeiro</Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayprodutos" ||
                    pathname === "/produtos/cadastro"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/displayprodutos">Produtos</Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayinsumos" ||
                    pathname === "/insumos/cadastro"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/displayinsumos">Insumos</Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayfinanceirodespesas" ||
                    pathname === "/financeiro/despesas/cadastro"
                      ? "none"
                      : ""
                  }`}
                >
                  <Link to="/displayfinanceirodespesas"></Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
