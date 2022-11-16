import { Link } from "react-router-dom";
import { Content } from "../../component/Content";
import { FormCadastro } from "../../component/Form";
import { Sidebar } from "../../component/Sidebar";
import "./index.css";

export const CadastroProdutos = () => {
  return (
    <>
      <Sidebar title={"Produtos"} display={true} />

      <Content>
        <div className="grid-item">
          <div className="d-flex align-items-center justify-content-end w-100">
            <Link to="/displayprodutos" className="new bg-success">
              <img src="/images/menu2.svg" alt="" />
            </Link>
          </div>
        </div>

        <div className="grid-item">
          <FormCadastro title={"Cadastrar um produto"} />
        </div>
      </Content>
    </>
  );
};
