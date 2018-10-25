// tictactoe.test.js
const ttt = require('./tictactoe');


test("returns player 'X' when playerturn is odd number", () => {
	expect(ttt.returnCurrentPlayer(1)).toBe("X");
});

test("returns player 'O' when playerturn is even number", () => {
	expect(ttt.returnCurrentPlayer(2)).toBe("O");
});

test("returns player 'X' when playerTurn is odd number", () => {
	expect(ttt.returnCurrentPlayer(1)).toBe("X");
});

test("returns player 'O' when playerTurn is even number'", () => {
	expect(ttt.returnCurrentPlayer(2)).toBe("O");
});

test("returns player 'X'", () => {
	expect(ttt.checkCell("1")).toBe("1"); // <--- implement
});

