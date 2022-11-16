import "./index.css";

export const FormCadastro = ({ title }) => {
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
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="tipoUnidade"
          id="tipoUnidade"
          placeholder="Tipo de unidade"
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="quantidade"
          id="quantidade"
          placeholder="Quantidade"
        />
        <input
          autoComplete="off"
          className="form-item"
          type="text"
          name="valor"
          id="valor"
          placeholder="Valor"
        />
        <div className="btn-register mt-3">
          <button className="btn text-white p-3 w-50 rounded-pill text-uppercase">
            cadastrar
          </button>
        </div>
      </form>
    </>
  );
};
