import React from "react";
import "./TicTacToe.css";
import { useState, useEffect } from "react";

const Square = ({ onClick, value }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState(null);

  const handleClick = (index) => {
    let cpySquares = [...squares];
    if (squares[index] === "") {
      cpySquares[index] = xIsNext ? "X" : "O";
      setSquares(cpySquares);
      setXIsNext(!xIsNext);
    }
  };

  const checkForWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setStatus(null);
  };

  useEffect(() => {
    if (!checkForWinner(squares) && squares.every((box) => box !== "")) {
      setStatus(`Its a draw`);
    } else if (checkForWinner(squares)) {
      setStatus(`Winner is ${checkForWinner(squares)}`);
    } else {
      setStatus(`Its ${xIsNext ? "X" : 0}'s turn`);
    }
  }, [squares, xIsNext]);

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <div className="row">
          <Square
            value={squares[0]}
            onClick={() => {
              handleClick(0);
            }}
          />
          <Square
            value={squares[1]}
            onClick={() => {
              handleClick(1);
            }}
          />
          <Square
            value={squares[2]}
            onClick={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[3]}
            onClick={() => {
              handleClick(3);
            }}
          />
          <Square
            value={squares[4]}
            onClick={() => {
              handleClick(4);
            }}
          />
          <Square
            value={squares[5]}
            onClick={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="row">
          <Square
            value={squares[6]}
            onClick={() => {
              handleClick(6);
            }}
          />
          <Square
            value={squares[7]}
            onClick={() => {
              handleClick(7);
            }}
          />
          <Square
            value={squares[8]}
            onClick={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
      <div className="status">
        <h2>{status}</h2>
      </div>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default TicTacToe;
