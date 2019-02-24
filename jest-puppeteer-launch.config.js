// disabled by changing filename to -launch

let options = {
  width: 1024,
  height: 768
}

const fetch = require('node-fetch')
const dockerHost = 'http://localhost:9222'

const response = await fetch(`${dockerHost}/json/version`)
const browserWSEndpoint = (await response.json()).webSocketDebuggerUrl

module.exports = {
  connect: {
    browserWSEndpoint,
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
  browserContext: 'default',
  // server: {
  //   command: `npm start`,
  //   port: 3000,
  //   launchTimeout: 25000,
  //   headless: true,
  //   debug: true,
  // },
}
