// Constants: gameplay mechanics
let p5Lib;
const GAME_FRAME_RATE = 10;
const FOOD_SPAWN_RATE = 15;
const FOOD_SCORE_MULTIPLE = 10;

// Constants: positioning
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const BLOCK_WIDTH = 20;
const BLOCK_STROKE_WIDTH = 10;
const SNAKE_START_X = 200;
const SNAKE_START_Y = 200;

// Constants: colors
const COLOR_BACKGROUND = 25;
const COLOR_SNAKE = [116, 196, 255];
const COLOR_DEADSNAKE = [255, 61, 33];
const COLOR_FOOD = [104, 253, 69];

// Game state
let p5SnakeColor;
let gameStarted = 0;
let totnum = 0;
let numEaten = 0;
let bigSnake;
let food = [];
let xAdd = 0;
let yAdd = 0;

export let gameEnded = 0;
export let score = 0;

export const setup = (p5, parentRef) => {
  p5Lib = p5;
  p5Lib.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(parentRef);
  p5Lib.colorMode(p5Lib.RGB);
  p5Lib.frameRate(GAME_FRAME_RATE);
  p5Lib.background(COLOR_BACKGROUND);
  p5SnakeColor = p5Lib.color(COLOR_SNAKE);
};

export const draw = () => {
  startGame();
  p5Lib.clear();
  p5Lib.background(COLOR_BACKGROUND);
  placeFood(p5Lib);
  bigSnake.renderMe(p5Lib);
  bigSnake.move(p5Lib);
  bigSnake.eat();
  totnum++;
};

function startGame() {
  if (gameStarted === 0) {
    bigSnake = new Snake(SNAKE_START_X, SNAKE_START_Y);
    gameStarted = 1; // so that we never do this again
  }
}

export const resetGame = (resetFrameRate = false) => {
  gameStarted = 0;
  totnum = 0;
  numEaten = 0;
  food = [];
  xAdd = 0;
  yAdd = 0;
  score = 0;
  gameEnded = 0;
  if (resetFrameRate) {
    p5Lib.frameRate(GAME_FRAME_RATE);
  }
};

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e) {
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }

  if (e.code === "ArrowUp") {
    xAdd = 0;
    yAdd = BLOCK_WIDTH * -1;
  } else if (e.code === "ArrowDown") {
    xAdd = 0;
    yAdd = BLOCK_WIDTH;
  } else if (e.code === "ArrowRight") {
    xAdd = BLOCK_WIDTH;
    yAdd = 0;
  } else if (e.code === "ArrowLeft") {
    xAdd = BLOCK_WIDTH * -1;
    yAdd = 0;
  }
  return false;
}

function placeFood() {
  // list the grid options
  let xOpt = [];
  let yOpt = [];

  for (let x = 0; x < CANVAS_WIDTH; x += BLOCK_WIDTH) {
    xOpt.push(x);
  }

  for (let y = 0; y < CANVAS_HEIGHT; y += BLOCK_WIDTH) {
    yOpt.push(y);
  }

  if (totnum % FOOD_SPAWN_RATE === 0) {
    const x = xOpt[Math.floor(Math.random() * xOpt.length)];
    const y = yOpt[Math.floor(Math.random() * yOpt.length)];
    const fruitsnack = new GameBlock(x, y);

    fruitsnack.makeFruity();
    food.push(fruitsnack);
  }
  food.forEach((snack) => snack.renderMe());
}

function gameOver() {
  console.log("GAME ENDED!!");

  gameEnded = 1;
  bigSnake.changeColor(COLOR_DEADSNAKE);

  // redraw board so we can turn the snake red
  // TODO: consider putting this within the Snake.renderMe() method

  p5Lib.clear();
  p5Lib.background(COLOR_BACKGROUND);
  placeFood(p5Lib);
  bigSnake.renderMe(p5Lib);
  p5Lib.frameRate(0);

  console.log("final score: " + numEaten * FOOD_SCORE_MULTIPLE);
}

class Snake {
  constructor(startX, startY) {
    this.chunks = [new GameBlock(startX, startY)];
    this.growing = false;
  }

  renderMe() {
    this.chunks.forEach((chunk) => chunk.renderMe());
  }

  changeColor(newColor) {
    this.chunks.forEach((chunk) => {
      chunk.myColor = newColor;
    });
  }

  move() {
    let copyHead = this.headAsCopy;
    copyHead.incrementItem(); // increment it
    this.chunks.push(copyHead); // put it back on the snake at front

    if (this.growing === false) {
      this.chunks.shift(); // remove bottom chunk
    }

    //check for cannibalism
    if (this.chunks.length > 1) {
      for (let i = 0; i < this.chunks.length - 1; i++) {
        const snakeChunk = this.chunks[i];
        if (snakeChunk.x === copyHead.x && snakeChunk.y === copyHead.y) {
          gameOver();
        }
      }
    }
  }

  eat() {
    let copyHead = this.headAsCopy;
    let newFood = []; // for all the stuff snake doesn't eat.

    this.growing = false;

    if (food.length > 0) {
      let eatenSnacks = food.filter((snack) => {
        if (snack.x === copyHead.x && snack.y === copyHead.y) {
          return snack;
        } else {
          newFood.push(snack);
        }
      });

      food = newFood; // replace food with the remaining fruitsnacks

      if (eatenSnacks.length > 0) {
        numEaten++;
        score += FOOD_SCORE_MULTIPLE;
        this.growing = true;
      }
    }
  }

  get headAsCopy() {
    let newHead = new GameBlock(
      this.chunks[this.chunks.length - 1].x,
      this.chunks[this.chunks.length - 1].y
    );
    return newHead;
  }
}

class GameBlock {
  constructor(x, y) {
    this._xval = x;
    this._yval = y;
    this.myColor = p5SnakeColor; // default to snake colors
  }

  get x() {
    return this._xval;
  }

  get y() {
    return this._yval;
  }

  makeFruity() {
    this.myColor = p5Lib.color(COLOR_FOOD); // re-use this class for fruitsnacks. make those fruity.
  }

  incrementItem() {
    this._xval += xAdd;
    this._yval += yAdd;

    // handle running off the board, re-looping
    if (this._xval > CANVAS_WIDTH - 1) {
      this._xval = 0;
    } else if (this._xval < 0) {
      this._xval = CANVAS_WIDTH;
    }

    if (this._yval > CANVAS_HEIGHT - 1) {
      this._yval = 0;
    } else if (this._yval < 0) {
      this._yval = CANVAS_HEIGHT;
    }
    return this;
  }

  renderMe() {
    p5Lib.fill(this.myColor);
    p5Lib.stroke(BLOCK_STROKE_WIDTH);
    p5Lib.rect(this._xval, this._yval, BLOCK_WIDTH, BLOCK_WIDTH);
  }
}
