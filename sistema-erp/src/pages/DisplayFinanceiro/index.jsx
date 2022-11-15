// TODO: Criar página de dashboard, responsaveis pela tarefa será definido.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página

import { useEffect } from "react";
import { Sidebar } from "../../component/Sidebar";
import { Content } from "../../component/Content";
import { Link } from "react-router-dom";
import "./index.css";

export const DisplayFinanceiro = () => {
  useEffect(() => {
    document.title = "Financeiro";
  }, []);

  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Financeiro"} display={true} />

        {/* cont-principal*/}
        <Content>
          <div className="grid-item">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Compras</h5>
                <Link to="#" className="btn btn-primary"></Link>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Compras</p>
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Nome</th>
                  <th>Quant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pneu de trator</td>
                  <td>25 unid</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Luva</td>
                  <td>25 unid</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mangueira</td>
                  <td>100 metros</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Content>
      </div>
    </>
  );
};
