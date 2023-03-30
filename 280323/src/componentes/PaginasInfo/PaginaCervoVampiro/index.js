import React from "react";
import BotaoVoltar from "../../BotaoVoltar";
import ImgCervoVampiro from "../../img/cervo_vampiro.webp";
import Card from "../../Cards";

export default function PaginaCervoVampiro() {
  return (
    <div>
      <Card>
        <img src={ImgCervoVampiro} alt="#" />
        <h1>Cervo Vampiro</h1>
        <h2>Reino: Animalia</h2>
        <h3>Caracteristicas:</h3>
        <p>
          Eles têm um corpo pequeno e pernas curtas em relação ao tamanho do
          corpo.
        </p>
        <p>
          Eles têm presas superiores alongadas que são mais visíveis nos machos,
          embora as fêmeas também as possuam.
        </p>
        <p>
          Eles têm orelhas grandes e arredondadas, que se movem
          independentemente uma da outra para detectar sons de diferentes
          direções.
        </p>
        <p>
          Eles têm uma pelagem densa e suave, geralmente marrom ou
          cinza-avermelhado, com uma mancha branca ao redor do lábio inferior.
        </p>
      </Card>
      <BotaoVoltar />
    </div>
  );
}
