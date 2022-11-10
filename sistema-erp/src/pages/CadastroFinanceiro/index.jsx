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
        <Sidebar />

        {/* cont-principal*/}
        <div class="row">
          <div class="col-sm-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Compras</h5>
                <a href="#" class="btn btn-primary"></a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul class="list-group">
            <li class="list-group-item">A disabled item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          </div>
      </div>

    </>
  );
};
