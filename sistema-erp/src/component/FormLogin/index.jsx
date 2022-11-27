import { useState } from "react";
import { Authentication } from "../../services/cadastrar";
import "./index.css";

export const FormLogin = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const Auth = new Authentication();

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
            value={user}
            onChange={(event) => {
              setUser(event.target.value);
            }}
          />
          <input
            autoComplete="off"
            className="form-control mt-3"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={pass}
            onChange={(event) => {
              setPass(event.target.value);
            }}
          />
          <div className="mt-3">
            <button
              className="btn-register"
              onClick={(event) => {
                event.preventDefault();
                Auth.login(user, pass, setErrorMessage);
              }}
            >
              Login
            </button>
          </div>

          {errorMessage && (
            <div className="text-danger mt-4">Usuário ou senha incorreta.</div>
          )}

          <div className="mt-5">
            <a href="/" className="fw-bold text-white text-decoration-none">
              Esqueci minha senha.
            </a>
          </div>
        </form>
      </div>
    </>
  );
};
