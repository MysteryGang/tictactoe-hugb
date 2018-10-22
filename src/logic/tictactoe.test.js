// tictactoe.test.js

const tictactoe = require('./tictactoe');

test("returns hello", () => {
	expect(tictactoe("bro")).toBe("Hello, bro!");
});