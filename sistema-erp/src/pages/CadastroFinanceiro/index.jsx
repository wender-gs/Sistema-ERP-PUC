// TODO: Criar página de dashboard, responsaveis pela tarefa será definido.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página

import { useEffect } from "react";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const CadastroFinanceiro = () => {
  useEffect(() => {
    document.title = "Financeiro";
  }, []);

  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Financeiro"} />

        {/* cont-principal*/}
        <div className="row">
          <div className="col-sm-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Compras</h5>
                <a href="#" className="btn btn-primary"></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item">A disabled item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </>
  );
};
