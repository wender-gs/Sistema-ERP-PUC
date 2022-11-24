// TODO: Criar página de dashboard, responsaveis pela tarefa WENDER, ANNA E VICTOR.

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página

import { useContext, useEffect, useState } from "react";
import PlantationErp from "../../img/img-erp.jpg";
import { Sidebar } from "../../component/Sidebar";
import { DisplayContext } from "../../contexts/DisplayContext";
import "./index.css";

export const Dashboard = () => {
  const { displayTrueorFalse, setdisplayTrueorFalse } =
    useContext(DisplayContext);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const pathname = window.location.pathname;

  return (
    <>
      {/* container grid */}
      <div className="grid mt-4">
        <Sidebar title={"Dashboard"} page="dash" display={false} />
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
      {
        <div className="d-flex">
          <div
            className={`${displayTrueorFalse === true ? "margin-left-13" : ""}`}
          >
            <div className="grid-items  ">
              <div className="dash-card-items p-5 m-5  text-center">
                <span>Despesas do Mês:</span>
                <div className="mt-5">
                  <span className="text-danger">- 10.000,00</span>
                </div>
              </div>
              <div className="dash-card-items p-5 m-5  text-center">
                <span>Faturamento do Mês:</span>
                <div className="mt-5">
                  <span className="text-success">- 10.000,00</span>
                </div>
              </div>
              <div className="dash-card-items p-5 m-5  text-center">
                <span>N de Produtos Cadastrados:</span>
                <div className="mt-5">
                  <span>30</span>
                </div>
              </div>
              <div className="dash-card-items p-5 m-5  text-center">
                <span>N de Insumos Cadastrados:</span>
                <div className="mt-5">
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              displayTrueorFalse === true ? "dash-card-extended mt-5 " : "mt-5"
            }`}
          >
            <img className="imagem " src={PlantationErp} />
          </div>
        </div>
      }
    </>
  );
};
