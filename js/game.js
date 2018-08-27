import {Coin} from './coin';
import {Furry} from './furry';

class Game{
    constructor(){
        this.board = document.querySelectorAll('section#board div');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.interval = setInterval(() => this.moveFurry(), 250);
    }
    index(x,y){
        return x + (y*10);
    }
    hideVisibleFurry(){
        if (document.querySelector('.furry')) {
            document.querySelector('.furry').classList.remove('furry');
        }
    };
    showFurry(){
        this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    showCoin(){
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };
    moveFurry(){
        if(this.furry.direction === 'right'){
            this.furry.x = this.furry.x + 1;
        }else if(this.furry.direction === 'left'){
            this.furry.x = this.furry.x - 1;
        }else if(this.furry.direction === 'down'){
            this.furry.y = this.furry.y + 1;
        }else if(this.furry.direction === 'up'){
            this.furry.y = this.furry.y - 1;
        }
        this.showFurry();
        this.gameOver();
        this.checkCoinCollision();
    };
    turnFurry(event){
        switch(event.which){
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };
    checkCoinCollision(){
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y){
            document.querySelector('div.coin').classList.remove('coin');
            this.score++;
            document.querySelector('#score strong').innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    };
    gameOver(){
        if(this.furry.x<0 || this.furry.x>9 || this.furry.y<0 || this.furry.y>9){
            clearInterval(this.interval);
            // console.log('to jest interwal ' + this.interval);
            this.hideVisibleFurry();
            document.querySelector('#over').classList.remove('invisible');
            document.querySelector('#over strong').innerText = this.score;
        }
    };
    // startGame(){
    //     return() => {
    //         setInterval(() => this.moveFurry(), 250)
    //     }
    // };
}
export {Game};