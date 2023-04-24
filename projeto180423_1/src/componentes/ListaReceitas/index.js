import React from "react";
import "./Style.css";
import Img from "./PaginasReceitas/img/ArrozCastanha.jpg";
import Img2 from "./PaginasReceitas/img/boloFrutas.jpg";
import Img3 from "./PaginasReceitas/img/cheesecake.jpg";
import Img4 from "./PaginasReceitas/img/peru.jpg";
import Img5 from "./PaginasReceitas/img/tender.jpg";
import Titulos from "../Titulos";

export default function ListaReceitas() {
  return (
    <div className="receitas">
      <h1>
        <Titulos title="Receitas de Natal" />
      </h1>
      <div className="conteudo-opt">
        <a href="/arroznatalino">
          <img src={Img} alt="" />
          <p>Arroz natalino com frutas secas</p>
        </a>
        <a href="/bolofrutas">
          <img src={Img2} alt="" />
          <p>Bolo de frutas</p>
        </a>
        <a href="/cheesecakechocolate">
          <img src={Img3} alt="" />
          <p>Cheesecake de Framboesas com Chocolate Branco</p>
        </a>
        <a href="/peruassado">
          <img src={Img4} alt="" />
          <p>Peru na manteiga de ervas com recheio de farofa</p>
        </a>
        <a href="/tender">
          <img src={Img5} alt="" />
          <p>Tender ao Molho de Laranja e Mel</p>
        </a>
      </div>
    </div>
  );
}
