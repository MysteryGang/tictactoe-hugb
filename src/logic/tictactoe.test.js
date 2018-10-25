// tictactoe.test.js
const ttt = require('./tictactoe');

test("returns player 'X' when playerturn is odd number", () => {
	expect(ttt.returnCurrentPlayer(1)).toBe("X");
});

test("returns player 'O' when playerturn is even number", () => {
	expect(ttt.returnCurrentPlayer(2)).toBe("O");
});
