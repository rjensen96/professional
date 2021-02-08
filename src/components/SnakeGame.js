import React, { useState } from "react";
import Sketch from "react-p5";
import { setup, draw, score, gameEnded } from "../SnakeSketch";
import "../Content.css";

export const SnakeGame = (props) => {
  let [writtenScore, setWrittenScore] = useState(0);
  let [restartMessage, setRestartMessage] = useState("");

  const updateScore = () => {
    setWrittenScore(`score: ${score}`);
    if (gameEnded) {
      setWrittenScore(`final score: ${score}`);
      setRestartMessage(`use arrow keys to restart`);
      console.log("current interval id: " + scoreIntervalId);
      clearInterval(scoreIntervalId);
    }
  };

  let scoreIntervalId = window.setInterval(updateScore, 300);
  console.log("initial interval id: " + scoreIntervalId);

  return (
    <section>
      <h1 className="gameHeader">use arrow keys.</h1>
      <div className="gameContainer">
        <Sketch setup={setup} draw={draw} />
      </div>
      <h2 className="gameHeader">{writtenScore}</h2>
      <h2 className="gameHeader">{restartMessage}</h2>
    </section>
  );
};
