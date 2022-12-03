export class CadastroInsumos {
  cadastro(nome, tipoUnidade, qnt, valor) {
    const countData = localStorage.length;

    const data = {
      nome,
      tipoUnidade,
      qnt,
      valor,
    };

    localStorage.setItem(`produtos_${countData + 1}`, JSON.stringify(data));
  }
}
