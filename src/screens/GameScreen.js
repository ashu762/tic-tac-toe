import React, { useState, useEffect } from "react";
import Game from "../components/Game";
const GameScreen = ({ location }) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [numGames, setNumGames] = useState(0);
  const [results, setResults] = useState([]);

  const [currGame, setCurrGame] = useState(0);
  useEffect(() => {
    const { player1, player2, numGames } = location.state.props;
    if (player1 && player2 && numGames) {
      setPlayer1(location.state.props.player1);
      setPlayer2(location.state.props.player2);
      setNumGames(location.state.props.numGames);
    }
  }, [location]);
  return (
    <div>
      <Game
        player1={player1}
        player2={player2}
        currGame={currGame}
        results={results}
        setResults={setResults}
        setCurrGame={setCurrGame}
        numGames={numGames}
      ></Game>
    </div>
  );
};

export default GameScreen;
