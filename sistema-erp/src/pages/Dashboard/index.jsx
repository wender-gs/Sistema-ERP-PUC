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
      <h1 className="p-3 text-uppercase">Dashboard</h1>
      <input type="checkbox" id="check" />
      <label id="icone" htmlFor="check">
        <img className="img-menu" src="/images/menu2.svg" alt="" />
      </label>
      <div className="barra">
        <nav>
          <ul>
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
    </>
  );
};
