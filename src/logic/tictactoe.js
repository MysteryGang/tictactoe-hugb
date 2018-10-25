//tictactoe.js

var playerTurn = 1; // player X or player O turn
var board = ["", "", "", "", "", "", "", "", ""];

var checkCell = function(cellid){
	
	var id = cellid.match(/\d/)[0];
	id = Number(id) - 1;

	if(board[id] == "X" || board[id] == "O"){
		return "true";
	}	
	return "false";
}

var currentPlayer = function(cellid){
	
	var id = cellid.match(/\d/)[0] ;
	id = Number(id) - 1;

	var player = returnCurrentPlayer(playerTurn);
	board[id] = player;
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