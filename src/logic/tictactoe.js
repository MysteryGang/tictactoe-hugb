//tictactoe.js

var playerTurn = 1; // player X or player O turn
var board = ["", "", "", "", "", "", "", "", ""];

var initializeBoard = function() {
	board = ["", "", "", "", "", "", "", "", ""];
	playerTurn = 1;
	return 'board initialized';
}

var checkCell = function(cellid){
	
	var id = getId(cellid);

	if(board[id] == "X" || board[id] == "O"){
		return "true";
	}	
	return "false";
}

var currentPlayer = function(cellid){
	
	var id = getId(cellid);
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

var getId = function (cellid){
	var id = cellid.match(/\d/)[0];
	id = Number(id) - 1; //-1 to get correct index to put in array
	return id;
}

module.exports.currentPlayer = currentPlayer;
module.exports.returnCurrentPlayer = returnCurrentPlayer;
module.exports.checkCell = checkCell;
module.exports.getId = getId;
module.exports.initializeBoard = initializeBoard;