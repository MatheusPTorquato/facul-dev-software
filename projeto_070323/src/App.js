import React from "react";
import './App.css';

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Slide from "./componentes/Slide";
import { Carrossel } from "./componentes/Slide/carrossel";
import News from "./componentes/News";
import { NewsList } from "./componentes/News/news";
export default function App(){
  return(
    <div className="container-box">
      <Header/>
      <Slide slides={Carrossel}/>
      <News news={NewsList}/>
      <Footer/>
    </div>
  );
}