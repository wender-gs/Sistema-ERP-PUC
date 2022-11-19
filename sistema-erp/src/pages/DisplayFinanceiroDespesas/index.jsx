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
import { Table } from "../../component/Table";
import { Link } from "react-router-dom";

export const DisplayFinanceiroDespesas = () => {
  const tableHeaders = ["N", "Nome", "Quant"];
  const dataValues = [
    {
      n: 1,
      nome: "Diesel",
      quant: "10.000 L",
    },
    {
      n: 2,
      nome: "Água",
      quant: "15.000 L",
    },
    {
      n: 3,
      nome: "Fertilizante",
      quant: "1.500 L",
    },
    {
      n: 4,
      nome: "Cimento",
      quant: "1.000 Kg",
    },
  ];

  function showDrop(id) {
    document.querySelector(`#${id}`).classList.toggle("d-none");
  }

  useEffect(() => {
    document.title = "Financeiro/Despesas";
  }, []);

  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Financeiro/Despesas"} display={true} />
        {/* cont-principal*/}
        <Content>
          <div className="grid-item">
            <div className="card ">
              <div className="card-body d-flex align-items-center justify-content-between">
                <h5 className="card-title me-4">Despesas</h5>
                <Link
                  onClick={() => {
                    showDrop("drop");
                  }}
                  to="#"
                  className="btn-primary"
                ></Link>
              </div>
            </div>

            <Link
              id="drop"
              className="d-none drop-despesa"
              to="/displayfinanceirocompras"
            >
              <div>Compras</div>
            </Link>
            <Link to="/financeiro/despesas/cadastro" className="new">
              <img src="/images/plus.svg" alt="" />
            </Link>
          </div>
          <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Despesas</p>
            <Table dataHeader={tableHeaders} dataValues={dataValues} />
          </div>
        </Content>
      </div>
    </>
  );
};
