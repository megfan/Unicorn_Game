import {Game} from './game';

document.addEventListener('DOMContentLoaded', function(){

    let game = new Game();
    game.showFurry();
    game.showCoin();
    // game.startGame();
    document.addEventListener('keydown', (event) => game.turnFurry(event) );
});