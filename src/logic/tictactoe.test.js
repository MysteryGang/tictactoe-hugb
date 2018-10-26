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
