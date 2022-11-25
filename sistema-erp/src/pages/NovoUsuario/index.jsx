// TODO: Criar página de login, responsaveis pela tarefa BRENO E CIRO

// Vamos tentar manter um padrão de código, limpo e objetivo, como não usaremos TS,
// faço necessário o uso de comentarios, breves e objetivos explicando o que o trecho
// do código faz, trazendo assim a facilidade de entendimento por outros desenvolvedores
// que venham a participar do código.

// toda regra de estilo devera ser escrita no
//arquivo index.css na pasta de sua respectiva página
import "./index.css";
import React from "react";
import { useEffect } from "react";
import { Content } from "../../component/Content";
import { FormCadastrar } from "../../component/FormCadastrar"

export const NovoUsuario = () => {
  useEffect(() => {
    document.title = "NovoUsuario";
  }, []);

  return (
      <div className="centralizar-conteudo">
        <div>
          <div className="btn-register mt-3">
            <h3 style={{ "marginBottom": "5px" }}>cadastrar</h3>
          </div>
          <FormCadastrar />
        </div>
      </div>
  );
};