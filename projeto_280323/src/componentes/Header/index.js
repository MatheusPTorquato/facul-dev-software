/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Style.css";

export default function Header() {
  return (
    <header>
      <p>BioZone</p>
      <nav class="header-box-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Animais</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
