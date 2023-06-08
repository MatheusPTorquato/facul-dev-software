import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListaReceitas from "../ListaReceitas";
import ArrozCastanha from "../ListaReceitas/PaginasReceitas/ReceitasNatal/ArrozCastanha";
import BoloFrutas from "../ListaReceitas/PaginasReceitas/ReceitasNatal/BoloFrutas";
import CheesecakeChocolate from "../ListaReceitas/PaginasReceitas/ReceitasNatal/CheesecakeChocolate";
import PeruAssado from "../ListaReceitas/PaginasReceitas/ReceitasNatal/PeruAssado";
import Tender from "../ListaReceitas/PaginasReceitas/ReceitasNatal/Tender"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListaReceitas />} />
        <Route exact path="/arroznatalino" element={<ArrozCastanha />}></Route>
        <Route exact path="/bolofrutas" element={<BoloFrutas />} />
        <Route exact path="/cheesecakechocolate" element={<CheesecakeChocolate />} />
        <Route exact path="/peruassado" element={<PeruAssado />} />
        <Route exact path="/tender" element={<Tender />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
