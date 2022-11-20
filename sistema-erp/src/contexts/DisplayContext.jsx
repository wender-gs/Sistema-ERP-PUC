import React, { createContext, useState } from "react";

//Função que constroe o Provider e também permite consumir os dados globais
export const DisplayContext = createContext();

//Componente Provider para passar os valores para os Childrens
export const DisplayProvider = ({ children }) => {
  const [displayTrueorFalse, setdisplayTrueorFalse] = useState(false);

  return (
    <DisplayContext.Provider
      value={{ displayTrueorFalse, setdisplayTrueorFalse }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
