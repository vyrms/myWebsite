import Head from 'next/head';
import React, { useState } from "react";
import styles from './index.module.css';


function Square({ value, onSquareClick }) {  
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({n, n_squares, winCondition, xIsNext, square_values, onPlay}){
  // runs when box is clicked
  function handleClick(i){
    if (square_values[i] || calculateWinner({square_values, winCondition})) {
      return;
    }
    const nextSquares = square_values.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  // generates the board
  let squareElements = [];
  let row = [];
  for (let i = 0; i < n_squares+1; i++) {
    row.push(Square({value:square_values[i], onSquareClick:() => handleClick(i)}));
    if ((i+1) % n == 0){
      squareElements.push(<div className={styles.boardRow}>{row}</div>);
      row = [];
    }
  }

  return (
    <div className={styles.board}>
      {squareElements}
    </div>
  );
}

function GameContainer() {
  const n = 3;
  const n_squares = n**2;
  const [xIsNext, setXIsNext] = useState(true);
  const [square_values, setSquares] = useState(Array(n_squares).fill(null));
  

  const winCondition = defineWinCondition({n, n_squares})

  const winner = calculateWinner({square_values, winCondition});
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function onPlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  let board = Board({n, n_squares, winCondition, xIsNext, square_values, onPlay});
  const resetbutton = resetGame({n_squares, setSquares, setXIsNext})

  return (
    <div className={styles.gameContainer}>
      <div className="status">{status}</div>
      {resetbutton}
      {board}
    </div>
  );
}

function defineWinCondition({n, n_squares}){
  let columns = [];
  for (let i = 0; i < n; i++) {
    let col = [];
    for (let j = 0; j < n; j++) {
      col.push(i+(n*j))
    }
    columns.push(col)
  }

  let diag1 = [];
  for (let i = 0; i < n_squares; i+=n+1) {
    diag1.push(i);
  }
  let diag2 = [];
  for (let i = n-1; i < n_squares-1; i+=n-1) {
    diag2.push(i);
  }

  let rows = [];
  for (let i = 0; i < n_squares; i+=n) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(i+j);
    }
    rows.push(row);
  }

  let winCondition = [...columns, diag1, diag2, ...rows];
  return winCondition
}

function calculateWinner({square_values, winCondition}){
  // get indexes of X and O
  let indexX = [];
  let indexO = [];
  for (let i = 0; i < square_values.length; i++) {
    if (square_values[i] == "X") {
      indexX.push(i)
    }else if (square_values[i] == "O") {
      indexO.push(i)
    }
  }
  // check win conditions
  for (let i = 0; i < winCondition.length; i++) {
    const checkWinX = winCondition[i].every((val) => indexX.includes(val));
    const checkWinO = winCondition[i].every((val) => indexO.includes(val));
    if (checkWinX) {
      return "X"
    }else if(checkWinO) {
      return "O"
    }
  }
  return
}

function resetGame({n_squares, setSquares, setXIsNext}){
  function onResetClick(){
    setSquares(Array(n_squares).fill(null));
    setXIsNext(true);
  }
  return (
    <button onClick={onResetClick}>
      Reset
    </button>
  )
}

export default function Ticktacktoe () {
  console.log("Ticktacktoe.js loaded");

  return (
  	<>
  	  <Head>
        <title>Ticktacktoe - Hosei Nakajima</title>
      </Head>
      <div className={styles.mainContainer}>
        <GameContainer />
      </div>
    </>
  )
}