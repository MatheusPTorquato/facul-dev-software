import React, { useState } from "react";
import "./Style.css";

export default function ContaClick() {
  const [qntdeClicks, setQntdeClicks] = useState(0);

  function contaClick() {
    const maisum = qntdeClicks +1;
    setQntdeClicks(maisum);
  }

  return (
    <div className="conteudo-centralizado">
      <h3>Quantidade de clicks:</h3>
      <h1>{qntdeClicks}</h1>

      <div className="area-botao">
        <label>click no botão abaixo para gerar um número aleatório</label>
        <button onClick={contaClick}>gerar número</button>
      </div>
    </div>
  );
}
