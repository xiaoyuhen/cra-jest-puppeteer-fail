const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch({
      headless: true,
      args: [`--window-size=1024,768`,
      '--remote-debugging-port=9222'
    ]   
  });
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({path: 'example.png'});
 
  //await browser.close();
})();



// const puppeteer = require('puppeteer');

// let options = {
//     width: 1024,
//     height: 768
//   }
  

// const launchOpt = {   
//     dumpio: true,
//     headless: false,
//     defaultViewport: {
//       width: 1024,
//       height:  768
//     },
//     args: [`--window-size=${options.width},${options.height}`] 
// }

// (async () => {
//   const browser = await puppeteer.launch(launchOpt);
//   const page = await browser.newPage();
//   //await page.goto('https://example.com');
//   //await page.screenshot({path: 'example.png'});
 
//   //await browser.close();
// })();
