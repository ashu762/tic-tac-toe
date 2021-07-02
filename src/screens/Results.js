import React, { useEffect, useState } from "react";
import "../App.css";
const Results = ({ location }) => {
  const [player1, setPlayer1] = useState("");
  const [player1Win, setPlayer1Win] = useState(0);
  const [player2Win, setPlayer2Win] = useState(0);
  const [player2, setPlayer2] = useState("");
  const [numDraws, setNumDraws] = useState();

  useEffect(() => {
    if (location.state && location.state.props) {
      setPlayer2(location.state.props.player2);
      setPlayer1(location.state.props.player1);
      setPlayer1Win(location.state.props.player1Win);
      setPlayer2Win(location.state.props.player2Win);
      setNumDraws(location.state.props.numDraws);
    }
  }, [location]);
  return (
    <div className="result">
      <div className="result-score">{`${player1} scored ${player1Win} out of ${
        player2Win + player1Win + numDraws
      }`}</div>
      <div className="result-score">{`${player2} scored ${player2Win} out of ${
        player2Win + player1Win + numDraws
      }`}</div>
      <div class="salute">
        <div>{player1}</div>
        <div>
          {player1Win > player2Win ? ">" : player2Win > player1Win ? "<" : "="}
        </div>
        <div>{player2}</div>
      </div>
    </div>
  );
};

export default Results;
