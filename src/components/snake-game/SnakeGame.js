import React, { useEffect, useState } from "react";
import Sketch from "react-p5";
import { setup, draw, score, gameEnded, resetGame } from "../../SnakeSketch";
import styles from "./snake-game.module.scss";

export const SnakeGame = (props) => {
  let [gameScore, setGameScore] = useState(gameEnded);
  let [gameIsOver, setGameIsOver] = useState(0);
  // let [restartMessage, setRestartMessage] = useState("");
  let scoreText = "";

  const handleRestart = () => {
    resetGame(true);
    setGameScore(0);
  };

  // does not work
  // useEffect(() => {
  //   function getScore() {
  //     setGameScore(scoreLocal);
  //   }

  //   let id = window.setInterval(getScore, 100);

  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [scoreLocal]);

  const updateScore = () => {
    console.log("score: ", score);
    setGameIsOver(gameEnded);

    if (score !== gameScore) {
      setGameScore(score);
      clearInterval(scoreIntervalId);
      // console.log("cleared interval:", scoreIntervalId);
    }
    if (gameEnded) {
      clearInterval(scoreIntervalId);
      setGameScore(score);
      // setRestartMessage(`use arrow keys to restart`);
      // console.log("current interval id: " + scoreIntervalId);
    }
  };

  let scoreIntervalId = window.setInterval(updateScore, 100);

  console.log("initial interval id: " + scoreIntervalId);

  gameEnded
    ? (scoreText = `final score: ${score}`)
    : (scoreText = `score: ${score}`);

  return (
    <section className={styles.snakeGame}>
      <header>
        <h1>A Snake is Born.</h1>
        <h2>use arrow keys</h2>
      </header>
      <div>
        <Sketch setup={setup} draw={draw} />
      </div>
      <div className={styles.scoreCounter}>{scoreText}</div>
      {gameIsOver ? (
        <div className={styles.resetButtonContainer}>
          <button onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <div />
      )}
    </section>
  );
};
