const { TeamSpeak, QueryProtocol, TextMessageTargetMode, TeamSpeakClient } = require('ts3-nodejs-library')

let tsClient

function initTSClient() {
  return new Promise((resolve, reject) => {
    TeamSpeak.connect({
      host: 'ts.luchang.xyz',
      protocol: QueryProtocol.RAW, //optional
      queryport: 10011, //optional
      serverport: 9987,
      username: 'serveradmin',
      password: process.env.TS_SERVER_QUERY_PASSWD,
      nickname: 'chatbot',
    })
      .then((ts) => {
        console.log('Connected!')
        tsClient = ts
        resolve(ts)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 *
 * @returns {TeamSpeakClient}
 */
function getTSClient() {
  if (tsClient == undefined || tsClient == null) {
    return Error('Initiate the client first!')
  }
  return tsClient
}

async function sendServerTextMsg(msg) {
  tsClient.sendTextMessage(0, 3, msg)
}

module.exports = {
  initTSClient,
  getTSClient,
}
