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
      <div className="sidebar">
        <span
          className="icone me-3"
          onClick={() => {
            document
              .querySelector(".icone")
              .classList.toggle("bg-icon-transform");
            document.querySelector(".barra").classList.toggle("transform");
            setdisplayTrueorFalse(!displayTrueorFalse);
          }}
        ></span>
        <h1 className={`text-capitalize d-inline`}>{title}</h1>
        <div className="user-icon">
          <img src="/images/user-icon.svg" width={40} alt="" />
        </div>
      </div>
      <div className={`barra ${display && "transform"}`}>
        <nav>
          <ul className="nav-menu">
            <li className="logo">
              <span className="fs-2">LOGO</span>
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
    </>
  );
};
