import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaInicial from "../PaginaInicial"
import PaginaAxolote from "../PaginasInfo/PaginaAxolote";
import PaginaCervoVampiro from "../PaginasInfo/PaginaCervoVampiro";
import PaginaLagartoTatu from "../PaginasInfo/PaginaLagartoTatu";
import PaginaPeixeLua from "../PaginasInfo/PaginaPeixeLua";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PaginaInicial />} />
        <Route exact path="/axolote" element={<PaginaAxolote />} />
        <Route exact path="/cervo" element={<PaginaCervoVampiro />} />
        <Route exact path="/lagarto" element={<PaginaLagartoTatu />} />
        <Route exact path="/peixe" element={<PaginaPeixeLua />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
