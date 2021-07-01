import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
const HomePage = () => {
  const player1Ref = useRef();
  const player2Ref = useRef();
  const numGamesRef = useRef();
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  function submitDetails() {
    const tempErrors = [];
    if (player1Ref.current.value.length === 0)
      tempErrors.push("Please enter Player 1 name!");
    if (player2Ref.current.value.length === 0)
      tempErrors.push("Please enter Player 2 name!");
    if (numGamesRef.current.value <= 0)
      tempErrors.push("Please enter a valid number of Games!");
    if (player2Ref.current.value === player1Ref.current.value)
      tempErrors.push("Player 1 and Player 2 name cannot be Same");
    if (tempErrors.length > 0) {
      setErrors(tempErrors);
      return;
    }
    history.push({
      pathname: "/game",
      state: {
        props: {
          player1: player1Ref.current.value,
          player2: player2Ref.current.value,
          numGames: numGamesRef.current.value,
        },
      },
    });
  }

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {errors.map((error) => {
        return <div>{error}</div>;
      })}

      <div>
        <label>Enter the name of Player 1</label>
        <input ref={player1Ref}></input>
      </div>
      <div>
        <label>Enter the name of Player 2</label>
        <input ref={player2Ref}></input>
      </div>
      <div>
        <label>Enter the number of games</label>
        <input ref={numGamesRef} type="number"></input>
      </div>
      <button onClick={submitDetails}>Submit</button>
    </div>
  );
};

export default HomePage;
