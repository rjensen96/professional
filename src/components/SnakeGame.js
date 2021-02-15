import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { setup, draw, score, gameEnded, resetGame } from "../SnakeSketch";
import "../Content.css";

export const SnakeGame = (props) => {
  let [gameScore, setgameScore] = useState(0);
  let [restartMessage, setRestartMessage] = useState("");
  let scoreText = "";

  const handleRestart = () => {
    resetGame();
    setgameScore(0);
  };

  // does not work
  // useEffect(() => {
  //   setgameScore(score);
  // }, []);

  const updateScore = () => {
    console.log("score: ", score);
    if (score !== gameScore) {
      setgameScore(score);
      clearInterval(scoreIntervalId);
      console.log("cleared interval:", scoreIntervalId);
    }
    if (gameEnded) {
      clearInterval(scoreIntervalId);
      setgameScore(score);
      setRestartMessage(`use arrow keys to restart`);
      // console.log("current interval id: " + scoreIntervalId);
    }
  };

  let scoreIntervalId = window.setInterval(updateScore, 100);
  // console.log("initial interval id: " + scoreIntervalId);

  gameEnded
    ? (scoreText = `final score: ${score}`)
    : (scoreText = `score: ${score}`);

  return (
    <section>
      <h1 className="gameHeader">use arrow keys.</h1>
      <div className="gameContainer">
        <Sketch setup={setup} draw={draw} />
      </div>
      <h2 className="gameHeader">{scoreText}</h2>
      {/* {gameEnded ? (
        <button onClick={handleRestart}>Restart</button>
      ) : (
        <div></div>
      )} */}
      {/* <h2 className="gameHeader">{restartMessage}</h2> */}
    </section>
  );
};
