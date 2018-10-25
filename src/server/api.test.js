// api.test.js
const request = require("supertest");
const api = require("./api");
const ttt = require("../logic/tictactoe");

describe("GET /cellclick endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/cellclick");
		expect(res.status).toBe(200);
	});
    it("should return current player X", async () => {
		const res = await request(api).get("/cellclick");
		expect(ttt.currentPlayer()).toBe("X");
    });
    it("should return current player O", async () => {
        const res = await request(api).get("/cellclick");
        ttt.currentPlayer(); // call function once before to check if second time returns O
		expect(ttt.currentPlayer()).toBe("O");
	});
});