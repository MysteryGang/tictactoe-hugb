//tictactoe.js

var playerTurn = 1; // player X or player O turn

var checkCell = function(cellid){
	return cellid; // <--- implement
}

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
module.exports.returnCurrentPlayer = returnCurrentPlayer;
module.exports.checkCell = checkCell;