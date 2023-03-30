import React from "react";
import BotaoVoltar from "../../BotaoVoltar";
import ImgLagartoTatu from "../../img/lagarto_tatu.webp";
import Card from "../../Cards";

export default function PaginaLagartoTatu() {
  return (
    <div>
      <Card>
        <img src={ImgLagartoTatu} alt="#" />
        <h1>Lagarto Tatu</h1>
        <h2>Reino: Animalia</h2>
        <h3>Caracteristicas:</h3>
        <p>
          Eles são lagartos grandes, podendo atingir até 1,5 metros de
          comprimento.
        </p>
        <p>
          Eles têm uma cauda longa e forte, que é usada para equilíbrio e
          defesa.
        </p>
        <p>Eles têm uma cabeça grande e achatada, com dentes afiados.</p>
        <p>
          Eles têm uma pele dura e escamosa, que pode variar em cores entre
          preto, marrom e cinza.
        </p>
      </Card>
      <BotaoVoltar />
    </div>
  );
}
