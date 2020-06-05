const puppeteer = require('puppeteer');

const url = 'https://www.flashscore.ru/football/germany';

// 1. get list of leagues
// .selected-country-list
// li elements, ignore elements with class "head" and "hidden-templates"

// 2. select league

// detailed tour list of league has itsown url:
// https://www.flashscore.ru/football/germany/bundesliga/fixtures/

// 3. select tours with its data

// 4. open match summary
// it opens separate page

// 5. on this match page click "H2H" tab

// 6. click several times on "show more" to load more data

// 7. copy data from all three tables



const start = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil : 'networkidle0',
  });

  const headers = await page.$$eval('.event__header', headers => { return headers.map((header) => {
    console.log('header', header);
    return header.textContent;
  }) });
  console.log('headers', headers);

  // await browser.close();
};

start()
  .then(() => {
    console.log('Done.');
    // process.exit();
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
