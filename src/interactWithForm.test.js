const puppeteer = require("puppeteer");

describe("tic tac toe website", () => {
  let browser, page;
  let url = "https://my-tictactoe-heroku-deployment.herokuapp.com/";

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: true, slowMo: 20 });
    page = await browser.newPage();
  });

  
  afterEach(() => {
    browser.close();
  });
  
/*
  test("click a box and then check if winnermessage is sent", async () => {
    await page.goto(url);
    // 1. Click on the left top box on the tic tac toe board, cell-1
      await page.click('#cell-1');
      console.log("clicked cell-1");
      await page.click('#cell-4');
      await page.click('#cell-5');
      await page.click('#cell-2');
      await page.click('#cell-9');
	  await page.click('#cell-3');
      await page.waitFor(700);

    // 2. Check if the winnermeassage was sent
    const textContent = await page.evaluate(() => document.querySelector('#winner-message').textContent);
    console.log(textContent);
    
    if (await page.evaluate(() => document.querySelector('#winner-message').textContent) === 'X wins') console.log('winner message sent');
    else throw "winner meassage not sent or is wrong.";
  

    //Irrelevent comments below
    //await page.click('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a:nth-child(1) > h3');
    //NotImplementedError();
    //expect(await page.$('#cell-1').innerHTML).toBe('X');
  });
  */
  
  
    test("check if whose turn it is changes", async () => {
    await page.goto(url);
    // 1. Click on the left top box on the tic tac toe board, cell-1
      await page.click('#cell-1');
      console.log("clicked cell-1");
      await page.waitFor(700);

    // 2. Check if the winnermeassage was sent
    const textContent = await page.evaluate(() => document.querySelector('#player-turn').textContent);
    console.log(textContent);
    
    if (await page.evaluate(() => document.querySelector('#player-turn').textContent) === 'O, it\'s your turn!') console.log('right turn message sent');
    else throw "wrong turn message sent";
  

    //Irrelevent comments below
    //await page.click('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a:nth-child(1) > h3');
    //NotImplementedError();
    //expect(await page.$('#cell-1').innerHTML).toBe('X');
  });
  
});
