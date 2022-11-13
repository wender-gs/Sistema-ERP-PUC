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

export const DisplayProdutos = () => {
  useEffect(() => {
    document.title = "Produtos";
  }, []);

  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Produtos"} display={true} />
        {/* cont-principal*/}
        <Content>
        <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Produtos</p>
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
                  <td>Arroz</td>
                  <td>200.000 kg</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Feijão</td>
                  <td>100.000 kg</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Tomate</td>
                  <td>150.000 kg </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Alface</td>
                  <td>180.000 kg</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Couve</td>
                  <td>910.000 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          </Content>
      </div>
      </>
        
        
);
};