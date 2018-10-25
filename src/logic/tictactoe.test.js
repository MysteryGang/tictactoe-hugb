// tictactoe.test.js
const ttt = require('./tictactoe');

test("returns player 'X'", () => {
	expect(ttt.currentPlayer(1)).toBe("X");
});