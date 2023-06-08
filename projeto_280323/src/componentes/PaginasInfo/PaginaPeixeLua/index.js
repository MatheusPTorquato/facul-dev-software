import React from "react";
import BotaoVoltar from "../../BotaoVoltar";
import ImgPeixeLua from "../../img/peixe_lua.webp";
import Card from "../../Cards";

export default function PaginaPeixeLua() {
  return (
    <div>
      <Card>
        <img src={ImgPeixeLua} alt="#" />
        <h1>Peixe Lua</h1>
        <h2>Reino: Animalia</h2>
        <h3>Caracteristicas:</h3>
        <p>
          Eles têm um corpo achatado e em forma de disco, que pode atingir
          diâmetros de até 3 metros.
        </p>
        <p>
          Eles têm uma barbatana dorsal alta, que se parece com uma vela, e uma
          barbatana anal longa.
        </p>
        <p>Eles têm olhos pequenos e boca grande, sem dentes.</p>
        <p>
          Eles são geralmente de cor cinza ou prateado, mas podem variar de
          branco a marrom, dependendo da região em que vivem.
        </p>
      </Card>
      <BotaoVoltar />
    </div>
  );
}
