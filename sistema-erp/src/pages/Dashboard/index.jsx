// TODO: Criar página de dashboard, responsaveis pela tarefa WENDER, ANNA E VICTOR.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página

import { useEffect } from "react";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      {/* container grid */}
      <div className="grid mt-4">
        <Sidebar title={"Dashboard"} page="dash" />

        {/* conteudo principal */}
        <div className="centered">
          <div className="dash-card">
            <div className="dash-card-content">
              <span className="title text-danger">saldo negativo</span>
              <div className="bottom-content">
                <div>
                  <img
                    className="bg-danger rounded"
                    src="/images/cash-icon.svg"
                    width={50}
                    alt=""
                  />
                </div>
                <span className="title text-danger">R$ -1.000,00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="dash-card">
            <div className="dash-card-content">
              <span className="title text-success">saldo positivo</span>
              <div className="bottom-content">
                <div className="">
                  <img
                    className="bg-success rounded"
                    src="/images/cash-icon.svg"
                    width={50}
                    alt=""
                  />
                </div>
                <span className="title text-success">R$ 1.000,00</span>
              </div>
            </div>
          </div>

          <div className="user-icon">
            <img
              className="bg-white rounded-circle p-2"
              src="/images/user-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
