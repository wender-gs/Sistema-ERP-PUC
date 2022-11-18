// TODO: Criar página de dashboard, responsaveis pela tarefa será definido.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página
import { Link } from "react-router-dom";
import { Content } from "../../component/Content";
import { FormCadastro } from "../../component/Form";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const CadastroDespesas = () => {
  return (
    <>
      <Sidebar title={"Despesas"} display={true} />

      <Content>
        <div className="grid-item">
          <div className="d-flex align-items-center justify-content-end w-100">
            <Link to="/displaydespesas" className="new bg-success">
              <img src="/images/menu2.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="grid-item">
          <FormCadastro title={"Cadastrar uma despesa"} />
        </div>
      </Content>
    </>
  );
};
