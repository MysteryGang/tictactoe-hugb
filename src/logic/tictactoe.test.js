// tictactoe.test.js
const ttt = require('./tictactoe');

test("returns player 'X' when playerturn is odd number", () => {
	expect(ttt.returnCurrentPlayer(1)).toBe("X");
});

test("returns player 'O' when playerturn is even number", () => {
	expect(ttt.returnCurrentPlayer(2)).toBe("O");
});

test("returns false", () => {
	expect(ttt.cellAlreadyClicked("1")).toBe(false);
});

test("returns false", () => {
	ttt.cellClick("1");
	expect(ttt.cellAlreadyClicked("1")).toBe(true);
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

test("returns X as winner", () => {
	ttt.cellClick("1");
	ttt.cellClick("2");
	ttt.cellClick("4");
	ttt.cellClick("5");
	ttt.cellClick("7");
	expect(ttt.checkForWinner()).toBe('X wins');
});

test("returns O as winner", () => {
	ttt.cellClick("1");
	ttt.cellClick("2");
	ttt.cellClick("4");
	ttt.cellClick("5");
	ttt.cellClick("6");
	ttt.cellClick("8");
	expect(ttt.checkForWinner()).toBe('X wins');
});