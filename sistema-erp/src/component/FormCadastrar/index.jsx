import "./index.css";
import { Link } from "react-router-dom";

export const FormCadastrar = () => {
  return (
    <>
      <form action="" id="cadastrar">
        <div>
          <input
            autoComplete="off"
            className="form-user"
            type="text"
            name="nome"
            id="nome"
            placeholder="Insira seu nome completo"
          />
        </div>
        <div>
          <input
            autoComplete="off"
            className="form-user"
            type="text"
            name="email"
            id="email"
            placeholder="Insira seu email"
          />
        </div>
        <div>
          <input
            autoComplete="off"
            className="senha"
            type="password"
            name="senha"
            id="senha"
            placeholder="Crie sua senha"
          />
        </div>
        <div className="btn-register mt-3">
          <Link to={"/DashBoard"}>
            <button className="btn text-white p-3 w-50 rounded-pill text-uppercase" style={{ "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }} >
              confirmar
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
