//tictactoe.js

var playerTurn = 1; // player X or player O turn

var currentPlayer = function(){
	
	var player = returnCurrentPlayer(playerTurn);
	playerTurn++;
	return player;
}

var returnCurrentPlayer = function(turnNumber){
	
	var player;
	if(turnNumber % 2 != 0) { 
		player = "X"; 
	} else {
		player = "O";
	}
	return player;
}

module.exports.currentPlayer = currentPlayer;