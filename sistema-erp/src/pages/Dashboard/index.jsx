import { useEffect, useState } from "react";
import PlantationErp from "../../img/img-erp.jpg";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const Dashboard = () => {
  const [displayTrueorFalse, setdisplayTrueorFalse] = useState(false);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      {/* container grid */}
      <div className={displayTrueorFalse ? "grid-dash ml" : "grid-dash"}>
        <header className="grid-item">
          <Sidebar
            title={"Dashboard"}
            page="dash"
            display={false}
            setdisplayTrueorFalse={setdisplayTrueorFalse}
            displayTrueorFalse={displayTrueorFalse}
          />
        </header>
        {/* conteudo principal */}
        <div className="grid-item">
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

        <div className="grid-item">
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
        </div>

        <div className="grid-item text-center">
          <p className="fs-3 my-3 balanco">Balanço</p>
          <div className="dash-card p-5 text-center">
            <span>Despesas do Mês:</span>
            <div className="mt-5">
              <span className="text-danger">- 10.000,00</span>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="dash-card p-5  text-center">
            <span>Faturamento do Mês:</span>
            <div className="mt-5">
              <span className="text-success">R$ 10.000,00</span>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="dash-card p-5 text-center">
            <span>Nº de Produtos Cadastrados:</span>
            <div className="mt-5">
              <span>30</span>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <div className="dash-card p-5 text-center">
            <span>N de Insumos Cadastrados:</span>
            <div className="mt-5">
              <span>4</span>
            </div>
          </div>
        </div>

        <div className="grid-item">
          <img className="imagem " src={PlantationErp} alt="" />
        </div>
      </div>
    </>
  );
};
