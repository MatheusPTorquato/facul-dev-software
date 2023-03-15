import React, { useState } from "react";
import "./Style.css";
export default function PaginaInicial() {
  const [numeroAleatorio1, setNumeroAleatorio] = useState();

  function gerarNurero() {
    const novoNumero = Math.floor(Math.random() * (100000000- 1)+1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <div className="conteudo-centralizado">
      <h3>Número aleatório:</h3>
      <h1>{numeroAleatorio1}</h1>

      <div className="area-botao">
        <label>click no botão abaoxp para gerar um número aleatório</label>
        <button onClick={gerarNurero}>gerar número</button>
      </div>
    </div>
  );
}
