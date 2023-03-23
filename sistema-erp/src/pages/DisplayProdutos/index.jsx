import "./index.css";
import { useEffect } from "react";
import { Content } from "../../component/Content";
import { Sidebar } from "../../component/Sidebar";
import { Table } from "../../component/Table";
import { Link } from "react-router-dom";

export const DisplayProdutos = () => {
  const tableHeaders = ["N", "Nome", "Quant"];
  const dataValues = [
    {
      n: 1,
      nome: "Arroz",
      quant: "200.000 Kg",
    },
    {
      n: 2,
      nome: "Feijão",
      quant: "100.000 Kg",
    },
    {
      n: 3,
      nome: "Tomate",
      quant: "150.000 Kg",
    },
    {
      n: 4,
      nome: "Alface",
      quant: "180.000 Kg",
    },
    {
      n: 5,
      nome: "Couve",
      quant: "910.000 Kg",
    },
  ];

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
          <div className="financeiro grid-item">
            <div className="d-flex align-items-center justify-content-end w-100">
              <Link to="/produtos/cadastro" className="new">
                <img src="/images/plus.svg" alt="" />
              </Link>
            </div>
          </div>
          <div className="financeiro grid-item">
            <p className="fw-bold fs-5 text-center mb-5">Lista de Produtos</p>
            <Table dataHeader={tableHeaders} dataValues={dataValues} />
          </div>
        </Content>
      </div>
    </>
  );
};
