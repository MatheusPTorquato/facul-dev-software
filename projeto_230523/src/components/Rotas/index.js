import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import HomePage from "../HomePage";
import TicTacToe from "../../games/tictactoe/TicTacToe";
import Hangman from "../../games/hangman/Hangman";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/tictactoe" element={<TicTacToe/>}/>
                <Route exact path="/hangman" element={<Hangman/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;