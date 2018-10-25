// api.test.js
const request = require("supertest");
const api = require("./api");
const ttt = require("../logic/tictactoe");

describe("GET /cellclick endpoint", () => {
	/*it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/cellclick");
		expect(res.status).toBe(200);
	});*/
    it("should return current player X", async () => {
		const res = await request(api).get("/cellclick");
		expect(ttt.currentPlayer("1")).toBe("X");
	});
	it("should return current player X", async () => {
		const res = await request(api).get("/cellclick");
		expect(ttt.currentPlayer("2")).toBe("O"); // next player is O since last was X
    });
});

describe("GET /postCell endpoint", () => {
	/*it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/postCell");
		expect(res.status).toBe(200);
	});*/
    it("should return false", async () => {
		const res = await request(api).get("/postCell");
		expect(ttt.checkCell("3")).toBe("false");
	});
	it("should return true", async () => {
		const res = await request(api).get("/postCell");
		ttt.currentPlayer("2"); // "click" the cell
		expect(ttt.checkCell("2")).toBe("true");
    });
});