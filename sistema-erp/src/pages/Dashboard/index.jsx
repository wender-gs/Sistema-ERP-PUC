// TODO: Criar página de dashboard, responsaveis pela tarefa WENDER, ANNA E VICTOR.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página
import { useEffect } from "react";
import "./index.css";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      {/* container grid */}
      <div className="grid mt-4">
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
                      <a href="/dashboard" className="fs-2">
                        LOGO
                      </a>
                    </li>
                    <li>
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

        {/* conteudo principal */}
        <div className="centered">card saldo negativo</div>
        <div className="right-side">card saldo positivo</div>
      </div>

      {/* <header>
        <h1 className="p-3 text-uppercase">Dashboard</h1>
        <input type="checkbox" id="check" />
        <label id="icone" htmlFor="check"></label>
        <div className="barra">
          <nav>
            <ul className="nav-menu">
              <li>
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
      </header> */}
    </>
  );
};
