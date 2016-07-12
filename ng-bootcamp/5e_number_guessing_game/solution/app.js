angular.module('guess-it', [])
  .controller('GameCtrl', function() {
    var game = this,
      answer = Math.floor(Math.random() * 1000) + 1; // 1-1000

    game.numGuesses = 0;
    
    // is the logic in the HTML OK? Should we move it here?!

    game.handleUserGuess = function(userGuess) {
      game.currentGuess = parseInt(userGuess, 10);
      game.delta = game.currentGuess - answer;
      game.numGuesses++;
      game.guess = '';
    }
  })
;
