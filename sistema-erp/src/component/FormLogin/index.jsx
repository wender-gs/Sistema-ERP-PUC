import "./index.css";
import { Link } from "react-router-dom";


export const FormLogin = () => {
  return (
    <>
      <div className="h-100 mt-5">
        <form className="mt-4" action="" id="login">
          <input
            autoComplete="off"
            className="form-control"
            type="text"
            name="usuario"
            id="usuario"
            placeholder="Usuário"
          />
          <input
            autoComplete="off"
            className="form-control mt-3"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <div className="mt-3">
            <Link to={"/dashboard"}>
              <button 
              className="btn-register">Login</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
