import { Link } from "react-router-dom";
import "./index.css";

export const Sidebar = ({ title, display }) => {
  const pathname = window.location.pathname;

  return (
    <>
      <header>
        <div className="left-side">
          <div className="d-flex ms-3 align-items-center">
            <input type="checkbox" id="check" />
            <label
              id="icone"
              htmlFor="check"
              className={`${display && "ml"}`}
            ></label>
            <h1 className="mt-2 ps-3 text-capitalize d-inline-block">
              {title}
            </h1>
            <div className={`barra ${display && "block"}`}>
              <nav>
                <ul className="nav-menu">
                  <li>
                    <span className="fs-2 brand">LOGO</span>
                  </li>
                  <li
                    className={`${pathname === "/dashboard" ? "active" : ""}`}
                  >
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li
                    className={`${
                      pathname === "/cadastrofinanceiro" ? "active" : ""
                    }`}
                  >
                    <Link to="/cadastrofinanceiro">Financeiro</Link>
                  </li>
                  <li>
                    <a href="/dashboard">Insumos</a>
                  </li>
                  <li
                  className={`${
                      pathname === "/displayProdutos" ? "active" : ""
                    }`}
                  >
                    <Link to="/displayProdutos">Produtos</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
