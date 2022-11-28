export class Authentication {
  cadastrar = (nome, email, senha) => {
    const dados = {
      nome,
      email,
      senha,
    };
    window.localStorage.setItem("usuario", JSON.stringify(dados));
  };

  login(user, pass, setErrorMessage) {
    try {
      const getUsr = JSON.parse(localStorage.getItem("usuario"));

      if (user === getUsr.email && pass === getUsr.senha) {
        window.location.href = "/dashboard";
        return;
      }

      setErrorMessage(true);
    } catch (error) {
      setErrorMessage(true);
    }
  }
}
