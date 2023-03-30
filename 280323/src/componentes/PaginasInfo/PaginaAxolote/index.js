import React from "react";
import BotaoVoltar from "../../BotaoVoltar";
import ImgAxolote from "../../img/axolote.webp";
import Card from "../../Cards";

export default function PaginaAxolote() {
  return (
    <div>
      <Card>
        <img src={ImgAxolote} alt="#" />
        <h1>Axolote</h1>
        <h2>Reino: Animalia</h2>
        <h3>Caracteristicas:</h3>
        <p>
          São salamandras aquáticas, com brânquias externas e cauda natatória, o
          que os torna excelentes nadadores.
        </p>
        <p>
          Tem capacidade de regenerar partes do corpo, incluindo membros, medula
          espinhal e cérebro.
        </p>
        <p>
          Eles têm olhos pequenos e de cor preta, com uma cabeça achatada e uma
          boca larga.
        </p>
        <p>
          A cor do axolote pode variar bastante, com tons de cinza, marrom,
          preto e até rosa claro ou branco. Algumas vezes, eles têm manchas ou
          faixas na pele.
        </p>
      </Card>

      <BotaoVoltar />
    </div>
  );
}
