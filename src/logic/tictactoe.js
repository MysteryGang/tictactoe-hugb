//tictactoe.js

var playerTurn = 1; // player X or player O turn
var board = ["", "", "", "", "", "", "", "", ""];
var isWinner = false;

var initializeBoard = function() {
	board = ["", "", "", "", "", "", "", "", ""];
	playerTurn = 1;
	isWinner = false;
	return 'board initialized';
}

var cellAlreadyClicked = function(cellid){

	var id = getId(cellid);

	if(board[id] == "X" || board[id] == "O"){
		return true;
	}	
	return false;
}

var cellClick = function(cellid){
	
	if(!isWinner){
		var id = getId(cellid);
		var player = returnCurrentPlayer(playerTurn);

		board[id] = player;
		checkForWinner();
		
		playerTurn++;
		return player;
	}
	return "";
}

var currentPlayer = function(){

	return returnCurrentPlayer(playerTurn);
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

var checkForWinner = function () {	

	if(cellAlreadyClicked("1") && board[0] === board[1] && board[1] === board[2]) {
		registerWinner();
		return board[0] + " wins";
	}
	if(cellAlreadyClicked("4") && board[3] === board[4] && board[4] === board[5]) {
		registerWinner();
		return board[3] + " wins";
	}
	if(cellAlreadyClicked("7") &&  board[6] === board[7] && board[6] === board[8]) {
		registerWinner();
		return board[6] + " wins";
	}
	if(cellAlreadyClicked("1") && board[0] === board[3] && board[3] === board[6]) {
		registerWinner();
		return board[0] + " wins";;
	}
	if(cellAlreadyClicked("2") && board[1] === board[4] && board[4] === board[7]) {
		registerWinner();
		return board[1] + " wins";;
	}
	if(cellAlreadyClicked("3") && board[2] === board[5] && board[5] === board[8]) {
		registerWinner();
		return board[2] + " wins";;
	}
	if(cellAlreadyClicked("1") && board[0] === board[4] && board[4] === board[8]) {
		registerWinner();
		return board[0] + " wins";;
	}
	if(cellAlreadyClicked("3") && board[2] === board[4] && board[4] === board[6]) {
		registerWinner();
		return board[2] + " wins";;
	}

	if(playerTurn === 10) {
		return "draw";
	}
	return "";
}

var registerWinner = function() {
	isWinner = true;
}

module.exports.cellClick = cellClick;
module.exports.currentPlayer = currentPlayer;
module.exports.returnCurrentPlayer = returnCurrentPlayer;
module.exports.cellAlreadyClicked = cellAlreadyClicked;
module.exports.getId = getId;
module.exports.initializeBoard = initializeBoard;
module.exports.checkForWinner = checkForWinner;
module.exports.registerWinner = registerWinner;