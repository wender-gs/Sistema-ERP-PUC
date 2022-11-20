import { useEffect } from "react";
import { Sidebar } from "../../component/Sidebar";
import { Content } from "../../component/Content";
import { Link } from "react-router-dom";
import "./index.css";
import { Table } from "../../component/Table";

export const DisplayFinanceiroCompras = () => {
  const tableHeaders = ["N", "Nome", "Quant"]; // constante com os valores de cabeçalho da tabela
  const tableValues = [
    {
      n: 1,
      nome: "Pneu de Trator",
      quant: 25,
    },
    {
      n: 2,
      nome: "Luva",
      quant: 25,
    },
    {
      n: 3,
      nome: "Mangueira",
      quant: "100 metros",
    },
  ]; // constante com os valores da tabela futuramente isso vai vir do banco de dados
  // então vai ficar mais organizado do que esta agora

  useEffect(() => {
    document.title = "Financeiro/Compras";
  }, []);

  function showDrop(id) {
    document.querySelector(`#${id}`).classList.toggle("d-none");
  }

  return (
    <>
      {/* menu */}
      <div>
        <Sidebar title={"Financeiro/Compras"} display={true} />

        {/* cont-principal*/}
        <Content>
          <div className="grid-item">
            <div className="card ">
              <div className="card-body d-flex align-items-center justify-content-between">
                <h5 className="card-title me-4 pe-1">Compras</h5>
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
              to="/displayfinanceirodespesas"
            >
              <div>Despesas</div>
            </Link>

            <Link to="/financeiro/compras/cadastro" className="new">
              <img src="/images/plus.svg" alt="" />
            </Link>
          </div>
          <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Compras</p>
            <Table dataHeader={tableHeaders} dataValues={tableValues} />
          </div>
        </Content>
      </div>
    </>
  );
};
