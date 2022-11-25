import "./index.css";
import { Link } from "react-router-dom"

export const FormLogin = () => {
  return (
    <div style={{ "flexDirection": "row", "justifyContent": "center", "alignItems": "center" }}>
      <div>
        <form action="" id="login">
          <div>
            <input
              autoComplete="off"
              className="form-user"
              type="text"
              name="usuario"
              id="usuario"
              placeholder="Usuário"
            />
          </div>
          <div>
            <input
              autoComplete="off"
              className="form-item"
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
            />
          </div>
          <div className="btn-register mt-3">
            <Link to={"/DashBoard"}>
              <button className="btn text-white text-center p-3 w-50 rounded-pill text-uppercase"
                style={{ "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }}>
                entrar
              </button>
            </Link>
          </div>
        </form>
        <div className="btn-register mt-3">
          <h6>ainda não é cadastrado?</h6>
          <Link to={"/NovoUsuario"}>
            <button className="btn text-white text-center p-3 w-50 rounded-pill text-uppercase" style={{ "flexDirection": "column", "justifyContent": "center", "alignItems": "center" }}>
              cadastrar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
