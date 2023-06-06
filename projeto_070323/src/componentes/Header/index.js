/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./style.css";

import logo from "./img/logo.png";

export default function Header() {
  return (
    <header className="header-box">
      <div className="header-box-container">
        <a href="#" className="header-logo">
          <img
            src={logo}
            alt="Seu site de Noticias do mundo dos animes"
            title="Seu site de Noticias do mundo dos animes"
          />
        </a>
        <nav class="header-box-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Animes</a>
            </li>
            <li>
              <a href="#">Mangás</a>
            </li>
            <li>
              <a href="#">Guia da Temporada</a>
            </li>
            <li>
              <a href="#">Lista de Recomendações</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
