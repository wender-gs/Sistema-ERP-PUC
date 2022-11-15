// TODO: Criar página de dashboard, responsaveis pela tarefa será definido.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página
import "./index.css";
import { useEffect } from "react";
import { Content } from "../../component/Content";
import { Sidebar } from "../../component/Sidebar";

export const DisplayInsumos = () => {
  useEffect(() => {
    document.title = "Insumos";
  }, []);
  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Insumos"} display={true} />

        {/* cont-principal*/}
        <Content>
        <span></span>
        <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Insumos</p>
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
                <td>Semente de tomate</td>
                <td>20.000 kg</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Semente de feijão</td>
                <td>25.000 kg</td>
              </tr>
            </tbody>
          </table>
          </div>
        </Content>
      </div>
    </>
  );
};
