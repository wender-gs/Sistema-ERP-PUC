import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { FormLogin } from "../../component/FormLogin";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formLogin, setFormLogin] = useState(false);
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="d-flex">
      <div className="left-item text-center">
        <div className="mt-5">
          <p className="fw-bold fs-3 text-white">LOGO</p>
        </div>
        {formLogin ? (
          <FormLogin />
        ) : (
          <>
            <div className="mt-5 w-50">
              <p className="fw-bold fs-4 mt-5 text-white">
                Bem-Vindo de volta!
              </p>
            </div>
            <div className="mt-5 w-75">
              <p className="fw-bold text-white">
                Acesse sua conta agora mesmo.
              </p>
            </div>
            <div className="mt-5">
              <button
                className="btn-login"
                onClick={() => {
                  setFormLogin(!formLogin);
                }}
              >
                Entrar
              </button>
            </div>
            <div className="mt-5">
              <a href="/" className="fw-bold text-white text-decoration-none">
                Esqueci minha senha.
              </a>
            </div>
          </>
        )}
      </div>

      <div className="right-item">
        <div className="content">
          <div className="mt-5 text-center">
            <p className="fw-bold fs-2">Crie um cadastro</p>
          </div>
          <div className="mt-5 w-50 ms-5">
            <p className="fw-bold text-secondary ms-5">
              Digite seus dados para criar um cadastro
            </p>
          </div>
          <form className="form" action="">
            <input type="text" name="nome" id="nome" placeholder="Nome" />
            <input type="text" name="email" id="email" placeholder="E-mail" />
            <input type="password" name="senha" id="senha" placeholder="Senha" />

            <Link to={"/dashboard"}>
              <button type="submit">CADASTRAR</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
