export const cadastrar = (nome, email, senha) => {
  const dados = {
    nome,
    email,
    senha,
  };
  window.localStorage.setItem("usuario", JSON.stringify(dados));
};
