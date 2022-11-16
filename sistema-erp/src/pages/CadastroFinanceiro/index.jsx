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

export const CadastroFinanceiro = () => {
  return (
    <>
      <Sidebar title={"Financeiro"} display={true} />

      <Content>
        <div className="grid-item">
          <div className="card">
            <div className="card-body d-flex align-items-center justify-content-between">
              <h5 className="card-title me-4">Compras</h5>
              <Link to="#" className="btn btn-primary"></Link>
            </div>
          </div>

          <Link to="/displayfinanceiro" className="new bg-success">
            <img src="/images/menu2.svg" alt="" />
          </Link>
        </div>

        <div className="grid-item">
          <FormCadastro title={"Cadastrar uma compra"} />
        </div>
      </Content>
    </>
  );
};
