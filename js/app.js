
    function Coin() {
        this.x = Math.floor(Math.random() *10);
        this.y = Math.floor(Math.random() *10);
    }

    function Furry (){
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }

    function Game() {
        this.board = document.querySelectorAll('section #board');
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;

        this.index = function(x,y) {
            return x + (y * 10);
        };


        this.hideVisibleFurry = function() {
            const classFurry = document.querySelector('.furry');
            if (classFurry) { classFurry.classList.toggle('furry');}
        };
        this.showFurry = function() {
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x, this.furry.y)].classList.toggle('furry');
        };
        this.showCoin = function() {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };
        this.hideVisibleCoin = function () {
            if ((document.querySelector('.coin')) !== null) {
                document.querySelector('.coin').classList.remove('coin');
            }
        };

        this.startGame = function () {
            let that = this;
            that.idSetInterval = setInterval(function () {
                that.moveFurry();
                console.log('hura z setintervala');
            }, 2000);
        };
        this.turnFurry = function (event) {
            switch(event.which){
                case 37:
                    this.furry.direction = 'left';
                    break;

                case 39:
                    this.furry.direction = 'right';
                    break;

                case 38:
                    this.furry.direction = 'up';
                    break;

                case 40:
                    this.furry.direction = 'down';
                    break;
            }
        };
        this.moveFurry = function () {
            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;

            }else if (this.furry.direction === 'left') {
                this.furry.x = this.furry.x - 1;

            }else if (this.furry.direction === 'up') {
                this.furry.y = this.furry.y - 1;

            }else if (this.furry.direction === 'down') {
                this.furry.y = this.furry.y + 1;
            }
            this.checkCoinCollision();
            this.gameOver();
            this.showFurry();
        };
        this.checkCoinCollision = function () {
            if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){
                document.querySelector('div.coin').classList.remove('coin');
                this.hideVisibleCoin();
                this.score++;
                document.querySelector('strong').innerText = this.score;
                this.coin = new Coin();
                this.showCoin();
            }
        };
        this.gameOver = function () {
            if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
                clearInterval(this.idSetInterval);
                this.hideVisibleFurry();
                document.querySelector('#over').classList.remove('invisible');
                document.querySelector('#over').innerText = 'Game Over';
            }
        }
    };

    const gameNew = new Game();
    gameNew.showFurry();
    gameNew.showCoin();
    gameNew.startGame();

    document.addEventListener('keydown', function (event) {
        console.log('you pressed key');
        gameNew.turnFurry(event);
    });



