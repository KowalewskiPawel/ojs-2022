const gameConstructor = require('./game')
let game = new gameConstructor();

game.move("rock", "paper");
game.move("scissors", "scissors");
game.move("paper", "scissors");
game.move("paper", "rock");

const storedGame = JSON.stringify(game);
const loadedGame = JSON.parse(storedGame);

game = new gameConstructor(loadedGame.p1Wins, loadedGame.p2Wins);

game.move("paper", "scissors");

