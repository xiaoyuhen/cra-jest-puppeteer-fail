let options = {
  width: 1024,
  height: 768,
}

// const fetch = require('node-fetch');
// const dockerHost = 'http://localhost:9222';

// let browserWSEndpoint;
// (async () => {
//   const response = await fetch(`${dockerHost}/json/version`)
//   //browserWSEndpoint = 
//   return (await response.json()).webSocketDebuggerUrl
// })()

module.exports = {
  connect: {
     //browserWSEndpoint,
    browserURL: 'http://localhost:9222/'
  },
  // launch: {
  //   dumpio: true,
  //   headless: false,
  //   defaultViewport: {
  //     width: 1024,
  //     height:  768
  //   },
  //   args: [`--window-size=${options.width},${options.height}`]
  // },
  //browserContext: 'default',
  // server: {
  //   command: `npm start`,
  //   port: 3000,
  //   launchTimeout: 25000,
  //   headless: true,
  //   debug: true,
  // },
}
