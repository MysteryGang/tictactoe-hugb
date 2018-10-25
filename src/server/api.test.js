// api.test.js
const request = require("supertest");
const api = require("./api");

describe("GET /hello endpoint", () => {
	it("should return a 200 OK status code", async () => {
		const res = await request(api).get("/hello");
		expect(res.status).toBe(200);
	});
    it("should return hello", async () => {
		const res = await request(api).get("/hello");
		expect(res.text).toBe("Hello");
	});
	
});