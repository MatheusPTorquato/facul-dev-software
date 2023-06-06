import React from "react";


const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial</h1>
      <a href="/tictactoe">
        <button>TicTacToe</button>
      </a>
      <a href="/hangman">
        <button>Jogo da Força</button>
      </a>
    </div>
  );
};

export default HomePage;
