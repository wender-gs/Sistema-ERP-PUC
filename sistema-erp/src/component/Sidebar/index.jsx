import "./index.css";

export const Sidebar = ({ title }) => {
  const pathname = window.location.pathname;

  return (
    <>
      <header>
        <div className="left-side">
          <div className="d-flex ms-3 align-items-center">
            <input type="checkbox" id="check" />
            <label id="icone" htmlFor="check"></label>
            <h1 className="mt-2 ps-3 text-capitalize d-inline-block">
              {title}
            </h1>
            <div className="barra">
              <nav>
                <ul className="nav-menu">
                  <li>
                    <span href="/dashboard" className="fs-2 brand">
                      LOGO
                    </span>
                  </li>
                  <li
                    className={`${pathname === "/dashboard" ? "active" : ""}`}
                  >
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li
                    className={`${
                      pathname === "/cadastrofinanceiro" ? "active" : ""
                    }`}
                  >
                    <a href="/cadastrofinanceiro">Financeiro</a>
                  </li>
                  <li>
                    <a href="/dashboard">Insumos</a>
                  </li>
                  <li>
                    <a href="/dashboard">Produtos</a>
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
