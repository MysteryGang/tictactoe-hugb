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

var cellClick = function(cellid){
	
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

var checkForWinner = function() {

	var winner = "";
	if(playerTurn === 10) {
		return "draw";
	}
	if(board[0] === board[1] && board[1] === board[2]) {
		winner = board[0];
	}
	else if(board[3] === board[4] && board[4] === board[5]) {
		winner = board[3];
	}

	else if(board[6] === board[7] && board[6] === board[8]) {
		winner = board[6];
	}

	else if(board[0] === board[3] && board[3] === board[6]) {
		winner = board[0];
	}

	else if(board[1] === board[4] && board[4] === board[7]) {
		winner = board[1];
	}

	else if(board[2] === board[5] && board[5] === board[8]) {
		winner = board[2];
	}

	else if(board[0] === board[4] && board[4] === board[8]) {
		winner = board[0];
	}

	else if(board[2] === board[4] && board[4] === board[6]) {
		winner = board[2];
	}
	if(winner === '') {
		return '';
	}
	return winner + " wins";
}

module.exports.cellClick = cellClick;
module.exports.returnCurrentPlayer = returnCurrentPlayer;
module.exports.checkCell = checkCell;
module.exports.getId = getId;
module.exports.initializeBoard = initializeBoard;
module.exports.checkForWinner = checkForWinner;