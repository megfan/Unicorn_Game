/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Coin() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nfunction Furry() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = 'right';\n};\n\nfunction Game() {\n\n    this.board = document.querySelectorAll('#board div');\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n\n    this.showFurry = function () {\n        this.hideVisibleFurry();\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n    this.hideVisibleFurry = function () {\n        if (document.querySelector('div.furry') !== null) {\n            document.querySelector('div.furry').classList.remove('furry');\n        }\n    };\n\n    this.hideVisibleCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');\n    };\n\n    this.startGame = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n            // console.log('hura z setintervala');\n        }, 350);\n    };\n\n    this.turnFurry = function (event) {\n        switch (event.which) {\n            case 37:\n                this.furry.direction = 'left';\n                break;\n\n            case 38:\n                this.furry.direction = 'right';\n                break;\n\n            case 39:\n                this.furry.direction = 'up';\n                break;\n\n            case 40:\n                this.furry.direction = 'down';\n                break;\n        }\n    };\n\n    this.moveFurry = function () {\n        if (this.furry.direction === 'right') {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === 'left') {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === 'up') {\n            this.furry.y = this.furry.x - 1;\n        } else if (this.furry.direction === 'down') {\n            this.furry.y = this.furry.x + 1;\n        }\n        this.showFurry();\n        this.checkCoinCollision();\n        this.gameOver();\n    };\n\n    this.checkCoinCollision = function () {\n        if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\n            document.querySelector('div.coin').classList.remove('coin');\n            this.hideVisibleCoin();\n            this.score++;\n            document.querySelector('strong').innerText = this.score;\n            this.coin = new Coin();\n            this.showCoin();\n        }\n    };\n\n    this.gameOver = function () {\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            clearInterval(this.idSetInterval);\n            this.hideVisibleFurry();\n            document.querySelector('#over').classList.remove('invisible');\n            document.querySelector('#over').innerText = 'Game Over';\n        }\n    };\n};\n\nvar gameNew = new Game();\ngameNew.showFurry();\ngameNew.showCoin();\ngameNew.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    console.log('you pressed key');\n    gameNew.turnFurry(event);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });