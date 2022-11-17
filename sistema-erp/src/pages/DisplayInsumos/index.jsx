import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Content } from "../../component/Content";
import { Sidebar } from "../../component/Sidebar";
import { Table } from "../../component/Table";
import "./index.css";

export const DisplayInsumos = () => {
  const tableHeaders = ["N", "Nome", "Quant"]; // constante com os valores de cabeçalho da tabela
  const dataValues = [
    {
      n: 1,
      nome: "Semente de tomate",
      quant: "20.000 Kg",
    },
    {
      n: 2,
      nome: "Semente de feijão",
      quant: "25.000 Kg",
    },
  ];

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
          <div className="grid-item">
          <div className="d-flex align-items-center justify-content-end w-100">
              <Link to="/insumos/cadastro" className="new">
                <img src="/images/plus.svg" alt="" />
              </Link>
            </div>
            </div>
            <div className="grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Insumos</p>
            <Table dataHeader={tableHeaders} dataValues={dataValues} />
          </div>
        </Content>
      </div>
    </>
  );
};
