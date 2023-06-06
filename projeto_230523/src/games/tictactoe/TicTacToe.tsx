import React, { useState, useEffect } from "react";
import "./Style.css";
import Block from "./components/Block/Block";
import { Button } from "./components/Button";

type Player = "X" | "O";

export default function TicTacToe() {
  const [state, setState] = useState<Player[]>(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<Player>("X");
  const [winner, setWinner] = useState<Player | null>(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const winningPlayer = checkWinner(state);
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
  }, [state]);

  const checkWinner = (state: Player[]): Player | null => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        setGameOver(true);
        return state[a];
      }
    }
    return null;
  };

  const handleBlockClick = (index: number) => {
    if (winner || state[index] !== null) {
      return;
    }

    const stateCopy = [...state];
    stateCopy[index] = currentTurn;

    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setCurrentTurn("X");
    setWinner(null);
    setGameOver(false);
  };

  return (
    <div>
      <a href="/">
        <button>Home</button>
      </a>
      <div className="board-container">
        <div className="board">
          <div className="row">
            <Block
              onClick={() => handleBlockClick(0)}
              value={state[0]}
              className={state[0] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(1)}
              value={state[1]}
              className={state[1] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(2)}
              value={state[2]}
              className={state[2] === "X" ? "azul" : "vermelho"}
            />
          </div>
          <div className="row">
            <Block
              onClick={() => handleBlockClick(3)}
              value={state[3]}
              className={state[3] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(4)}
              value={state[4]}
              className={state[4] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(5)}
              value={state[5]}
              className={state[5] === "X" ? "azul" : "vermelho"}
            />
          </div>
          <div className="row">
            <Block
              onClick={() => handleBlockClick(6)}
              value={state[6]}
              className={state[6] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(7)}
              value={state[7]}
              className={state[7] === "X" ? "azul" : "vermelho"}
            />
            <Block
              onClick={() => handleBlockClick(8)}
              value={state[8]}
              className={state[8] === "X" ? "azul" : "vermelho"}
            />
          </div>
          {winner && <div className="text">{`"${winner}" venceu o jogo!`}</div>}

          <div className="botao">
            {gameOver && <Button label="Reiniciar" onClick={resetGame} />}
          </div>
        </div>
      </div>
    </div>
  );
}
