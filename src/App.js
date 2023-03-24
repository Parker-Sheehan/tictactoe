import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const setSquaresHandler = (selectedSquares) => {
    console.log(squares)
    setSquares(selectedSquares);
    console.log(squares)
  };

  const setPlayerHandler = (selectedPlayer) => {
    setPlayer(selectedPlayer);
  };

  const resetHandler = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayer(true)
  }

  function calculateWinner(arr) {
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
            arr[a] &&
            arr[a] === arr[b] &&
            arr[a] === arr[c]
        ) {
            return `${arr[a]} won!`;
        }
    }
    return "Who will win?";
}

  return (
    <div className="App">
      <div className="container">
        {squares.map((val, index) => {
          return(
          <Square
            squareValue={val}
            index={index}
            squares={squares}
            player={player}
            setSquares={setSquaresHandler}
            setPlayer={setPlayerHandler}
          />
          );
        })}
      </div>
      <span>{calculateWinner(squares)}</span>
      <button onClick={resetHandler}>Reset!</button>
    </div>
  );
}

export default App;
