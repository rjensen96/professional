// Constants: gameplay mechanics
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
let gameEnded = 0;
let totnum = 0;
let numEaten = 0;
let bigSnake;
let food = [];
let xAdd = 0;
let yAdd = 0;

export const setup = (p5, parentRef) => {};
