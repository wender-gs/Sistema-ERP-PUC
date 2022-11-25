import React from "react";
import { Link } from "react-router-dom";

export const cadastrar = (nome, email, senha)=> {
    const dados = {
        nome,
        email, 
        senha
    };
    window.localStorage.setItem("usuario", JSON.stringify(dados));
};