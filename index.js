const { initTSClient, getTSClient } = require('./src/services/tsServerQuery')
const { textMsgRoute } = require('./src/routes/textMsgRoutes')

async function main() {
  await initTSClient()

  const ts = getTSClient()
  ts.on('textmessage', (msg) => textMsgRoute(msg))
}

main()
