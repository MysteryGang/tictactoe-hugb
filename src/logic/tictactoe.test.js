// tictactoe.test.js
const ttt = require('./tictactoe');

test("returns player 'X' when playerturn is odd number", () => {
	expect(ttt.returnCurrentPlayer(1)).toBe("X");
});

test("returns player 'O' when playerturn is even number", () => {
	expect(ttt.returnCurrentPlayer(2)).toBe("O");
});

test("returns false", () => {
	expect(ttt.checkCell("1")).toBe("false");
});

test("returns id of cell", () => {
	expect(ttt.getId("cell-1")).toBe(0);
});

test("returns id of cell", () => {
	expect(ttt.getId("cell-2")).toBe(1);
});

test("return message when called", () => {
	expect(ttt.initializeBoard()).toBe("board initialized");
});

test("returns correct winner", () => {
	var board = ['X', 'O', 'O', 'X', 'O', '', 'X', '', ''];
	expect(ttt.winner(board)).toBe('X wins');
});

test("returns draw", () => {
	var board = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
	var playerTurn = 10;
	expect(ttt.winner(board, playerTurn)).toBe('draw');
});

test("returns true", () => {
	expect(ttt.registerWinner()).toBe(true);
});
