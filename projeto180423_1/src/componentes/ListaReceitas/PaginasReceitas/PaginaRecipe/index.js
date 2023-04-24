import React from "react";
import "./Style.css";
import VoltarPg from "../../../VoltarPg";

export default function Recipe(props) {
  return (
    <div className="recipe-container">
      <h2 className="titlepage">{props.title}</h2>
      <div className="recipe-info">
        <p className="recipe-time">Tempo: {props.tempo}</p>
        <p className="recipe-yield">Rendimento: {props.rendimento}</p>
        <p className="recipe-difficulty">Dificuldade: {props.dificuldade}</p>
      </div>
      <img className="recipe-img" src={props.image} alt={props.alt} />
      <div className="ingredients-preparation">
        <div className="ingredients">
          <h3>Ingredientes:</h3>
          <p>{props.ingredientes}</p>
        </div>
        <div className="preparation">
          <h3>Modo de Preparo:</h3>
          <p>{props.modoPreparo}</p>
        </div>
      </div>
      <div className="voltar-pg">
        <VoltarPg/>
      </div>
    </div>
  );
}
