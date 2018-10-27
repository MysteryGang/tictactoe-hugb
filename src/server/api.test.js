// api.test.js
const request = require("supertest");
const api = require("./api");
const ttt = require("../logic/tictactoe");

describe("GET /cellclick endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/cellClick/1");
		expect(res.status).toBe(200);
	});
    it("should return current player X", async () => {
		const res = await request(api).get("/cellClick");
		expect(ttt.cellClick("2")).toBe("O"); // next player is O since in last test it was X
	});
	it("should return current player X", async () => {
		const res = await request(api).get("/cellClick");
		expect(ttt.cellClick("3")).toBe("X"); // next player is X since in last test it was XO
    });
});

describe("GET /currentPlayer endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/currentPlayer");
		expect(res.status).toBe(200);
	});
  it("should return current player X", async () => {
		const res = await request(api).get("/currentPlayer");
		expect(ttt.cellClick("2")).toBe("O");
	});
});

describe("GET /checkCell endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/checkCell/4");
		expect(res.status).toBe(200);
	});
    it("should return false", async () => {
		const res = await request(api).get("/checkCell");
		expect(ttt.checkCell("5")).toBe("false");
	});
	it("should return true", async () => {
		const res = await request(api).get("/checkCell");
		ttt.cellClick("6"); // "click" the cell
		expect(ttt.checkCell("6")).toBe("true");
    });
});

describe("GET /initializeBoard endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/initializeBoard");
		expect(res.status).toBe(200);
	});
	it("should return board initialized message when called", async () => {
		const res = await request(api).get("/initializeBoard");
		expect(ttt.initializeBoard()).toBe("board initialized");
	})
});

describe("GET /registerWinner endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/registerWinner");
		expect(res.status).toBe(200);
	});
	it("should return board initialized message when called", async () => {
		const res = await request(api).get("/registerWinner");
		expect(ttt.registerWinner()).toBe(true);
	})
});