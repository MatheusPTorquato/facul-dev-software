import React from "react";
//import { Link } from "react-router-dom";
import "./Style.css";
import ImgAxolote from "../img/axolote.webp";
import ImgCervoVampiro from "../img/cervo_vampiro.webp";
import ImgLagartoTatu from "../img/lagarto_tatu.webp";
import ImgPeixeLua from "../img/peixe_lua.webp";
//import Card from "../Cards";

export default function PaginaInicial() {
  return (
    <div>
      <h1>De olho no animal</h1>
      <div className="conteudo-opt">
          <a className="opt-axolote" href="/axolote">
            <img src={ImgAxolote} alt="" />
            <p>Axolote</p>
          </a>

        <a className="opt-cervo" href="/cervo">
          <img src={ImgCervoVampiro} alt="" />
          <p>Cervo Vampiro</p>
        </a>
        <a className="opt-lagarto" href="/lagarto">
          <img src={ImgLagartoTatu} alt="" />
          <p>Lagarto Tatu</p>
        </a>
        <a className="opt-peixe" href="/peixe">
          <img src={ImgPeixeLua} alt="" />
          <p>Peixe Lua</p>
        </a>
      </div>
    </div>
  );
}
