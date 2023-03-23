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
      <button onClick={resetHandler}>Reset!</button>
    </div>
  );
}

export default App;
