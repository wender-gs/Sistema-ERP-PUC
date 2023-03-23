import { useState } from "react";
import { CadastroInsumos } from "../../services/insumosCadastro";
import "./index.css";

export const FormCadastro = ({ title }) => {
  const cadastro = new CadastroInsumos();

  const [nome, setNome] = useState("");
  const [tipoUnidade, setTipoUnidade] = useState("");
  const [qnt, setQnt] = useState("");
  const [valor, setValor] = useState("");

  function handleSubmit() {
    cadastro.cadastro(nome, tipoUnidade, qnt, valor);
  }

  return (
    <>
      <h5 className="mt-4 mb-5 text-center">{title}</h5>

      <p className="mb-3 ms-2 text-secondary">
        Digite os dadados necessários para o cadastro
      </p>

      <form action="" id="cadastro">
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="nome"
          id="nome"
          placeholder="Nome"
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="tipoUnidade"
          id="tipoUnidade"
          placeholder="Tipo de unidade"
          value={tipoUnidade}
          onChange={(event) => {
            setTipoUnidade(event.target.value);
          }}
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="quantidade"
          id="quantidade"
          placeholder="Quantidade"
          value={qnt}
          onChange={(event) => {
            setQnt(event.target.value);
          }}
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="valor"
          id="valor"
          placeholder="Valor"
          value={valor}
          onChange={(event) => {
            setValor(event.target.value);
          }}
        />
        <div className="btn-register mt-3">
          <button
            onClick={handleSubmit}
            className="btn text-white p-3 w-50 rounded-pill text-uppercase"
          >
            cadastrar
          </button>
        </div>
      </form>
    </>
  );
};
