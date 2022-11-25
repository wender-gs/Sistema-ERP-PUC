import "./index.css";
import React from "react";
import { useEffect, useState } from "react";
import { cadastrar } from "../../services/cadastrar";

export const Login = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
          <formLogin />
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
            <input
              type="text"
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
                cadastrar(nome, email, senha);
              }}
              type="submit"
            >
              CADASTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
