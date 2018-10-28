const puppeteer = require("puppeteer");

describe("tic tac toe website", () => {
  let browser, page;
  let url = "https://my-tictactoe-heroku-deployment.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 0 });
    page = await browser.newPage();
  });

  afterEach(() => {
    browser.close();
  });

  test("Server responds with 200 status code", async () => {
    const response = await page.goto(url);
    // Check that the server responds with a 200 status message
    expect(response._status).toBe(200);
  });

  test("Page title is 'Tic Tac Toe'", async () => {
    const response = await page.goto(url);
    const pageTitle = await page.title();
    // Check that the page title is "Google"
    expect(pageTitle).toBe("Tic Tac Toe");
  });
});
