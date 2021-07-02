import React, { useState, useEffect } from "react";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";
import { useHistory } from "react-router";
const Game = ({
  player1,
  player2,
  currGame,
  results,
  setCurrGame,
  setResults,
  numGames,
}) => {
  const [gameHistory, setGameHistory] = useState(Array(9).fill(null));
  const [step, setStep] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const [message, setMessage] = useState("");
  const values = ["X", "O"];
  const history = useHistory();
  function handleClick(i) {
    if (calculateWinner(gameHistory) || gameHistory[i]) return;
    gameHistory[i] = values[step % 2];
    setStep(step + 1);
    setGameHistory(gameHistory);

    if (calculateWinner(gameHistory) && !hasCompleted) {
      setHasCompleted(true);
      if ((currGame + step) % 2) {
        setMessage(`${player2} wins the game`);
        results.push(2);
        setResults(results);
      } else {
        setMessage(`${player1} wins the game`);
        results.push(1);
        setResults(results);
      }
      return;
    }
    if (step === 8) {
      setHasCompleted(true);
      setMessage("Draw!!");
      results.push(0);
      setResults(results);
    }

    if (step + (currGame % 2) === 0) console.log(player1);
  }
  function nextGameHandler() {
    setStep(0);
    setGameHistory(Array(9).fill(null));
    setMessage("");
    setHasCompleted(false);
    setCurrGame(currGame + 1);
  }
  function resultHandler() {
    let player1Win = 0;
    let player2Win = 0;
    let numDraws = 0;
    for (let i = 0; i < results.length; i++) {
      if (results[i] === 1) player1Win++;
      else if (results[i] === 2) player2Win++;
      else numDraws++;
    }

    history.push({
      pathname: "/results",
      state: {
        props: {
          player1: player1,
          player2: player2,
          player1Win: player1Win,
          player2Win: player2Win,
          numDraws: numDraws,
        },
      },
    });
  }

  return (
    <div>
      {gameHistory && (
        <Board
          sqaures={gameHistory}
          handleClick={handleClick}
          currGame={currGame}
          numGames={numGames}
        />
      )}

      {hasCompleted ? (
        <div class="next-game">
          <div>{message}</div>
          <button
            className="homepage-button"
            onClick={currGame >= numGames - 1 ? resultHandler : nextGameHandler}
          >
            {currGame >= numGames - 1 ? "See Results" : "Next game"}
          </button>
        </div>
      ) : (
        <div class="current-turn">
          Current Turn : {(currGame + step) % 2 === 0 ? player1 : player2} (
          {step % 2 == 0 ? "X" : "O"})
        </div>
      )}
    </div>
  );
};

export default Game;
