import { Link } from "react-router-dom";
import "./index.css";

export const Sidebar = ({
  title,
  display,
  page,
  setdisplayTrueorFalse,
  displayTrueorFalse,
}) => {
  const pathname = window.location.pathname;

  return (
    <>
      <header>
        <div className="d-flex ms-3 align-items-center">
          <input type="checkbox" id="check" />
          <label
            id="icone"
            htmlFor="check"
            className={`${display && "d-none"}`}
            onClick={() => {
              setdisplayTrueorFalse(!displayTrueorFalse);
            }}
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

                <li
                  className={`${
                    pathname === "/dashboard" ? "active disabled_link" : ""
                  }`}
                >
                  <Link
                    to="/dashboard"
                    onClick={() =>
                      displayTrueorFalse === true
                        ? setdisplayTrueorFalse(false)
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
                      ? "active disabled_link"
                      : ""
                  }`}
                >
                  <Link to="/displayfinanceirocompras">Financeiro</Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayprodutos" ||
                    pathname === "/produtos/cadastro"
                      ? "active disabled_link"
                      : ""
                  }`}
                >
                  <Link to="/displayprodutos">Produtos</Link>
                </li>
                <li
                  className={`${
                    pathname === "/displayinsumos" ||
                    pathname === "/insumos/cadastro"
                      ? "active disabled_link"
                      : ""
                  }`}
                >
                  <Link to="/displayinsumos">Insumos</Link>
                </li>
                <li>
                  <Link to="/">Sair</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
