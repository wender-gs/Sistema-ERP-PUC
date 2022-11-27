import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { FormLogin } from "../../component/FormLogin";
import { Authentication } from "../../services/cadastrar";

export const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const Auth = new Authentication();
  const [formLogin, setFormLogin] = useState(false);

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div className="grid-login">
        <div className="left-item">
          <div className="mt-5">
            <p className="fw-bold fs-3 text-white">LOGO</p>
          </div>
          {formLogin ? (
            <FormLogin />
          ) : (
            <>
              <div className="mt-5">
                <p className="fw-bold fs-4 mt-5 text-white">
                  Bem-Vindo de volta!
                </p>
              </div>
              <div className="mt-5">
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
            </>
          )}
        </div>
        <div className="right-item">
          <div className="mt-5">
            <p className="fw-bold fs-2">Crie um cadastro</p>
          </div>
          <div className="mt-5 ">
            <p className="fw-bold text-secondary">
              Digite seus dados para criar um cadastro
            </p>
          </div>
          <form className="form" action="">
            <input
              type="text"
              autoComplete="off"
              value={nome}
              onChange={(event) => {
                setNome(event.target.value);
              }}
              name="nome"
              id="nome"
              placeholder="Nome"
            />
            <input
              type="text"
              autoComplete="off"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              type="password"
              autoComplete="off"
              value={senha}
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              name="senha"
              id="senha"
              placeholder="Senha"
            />

            <button
              onClick={() => {
                Auth.cadastrar(nome, email, senha);
              }}
              type="submit"
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
