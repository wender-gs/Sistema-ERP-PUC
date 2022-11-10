import "./index.css";

export const Sidebar = () => {
  return (
    <>
      <header>
        <div className="left-side">
          <div className="d-flex ms-3 align-items-center">
            <input type="checkbox" id="check" />
            <label id="icone" htmlFor="check"></label>
            <h1 className="mt-2 ps-3 text-uppercase d-inline-block">
              Dashboard
            </h1>
            <div className="barra">
              <nav>
                <ul className="nav-menu">
                  <li>
                    <span href="/dashboard" className="fs-2 brand">
                      LOGO
                    </span>
                  </li>
                  <li className="active bg-success">
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a href="/dashboard">Financeiro</a>
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
