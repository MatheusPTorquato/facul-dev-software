import React from 'react';

import "./Style.css";

export default function Titulos( props ) {
  return(
    <p className="pTitulo">{props.title}</p>
  );
}