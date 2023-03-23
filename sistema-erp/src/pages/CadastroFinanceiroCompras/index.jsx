import { Link } from "react-router-dom";
import { Content } from "../../component/Content";
import { FormCadastro } from "../../component/Form";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const CadastroFinanceiroCompras = () => {
  return (
    <>
      <Sidebar title={"Financeiro/Compras"} display={true} />

      <Content>
        <div className="financeiro grid-item">
          <div className="d-flex align-items-center justify-content-end w-100">
            <Link to="/displayfinanceirocompras" className="new bg-success">
              <img src="/images/menu2.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="financeiro grid-item">
          <FormCadastro title={"Cadastrar uma compra"} />
        </div>
      </Content>
    </>
  );
};
