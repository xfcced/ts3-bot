const { singleChat } = require('../controllers/chatController')

/**
 *
 * @param {import("ts3-nodejs-library").TextMessageEvent} msgEvent
 * @returns
 */
function textMsgRoute(msgEvent) {
  if (msgEvent.invoker.type != 0 || msgEvent.targetmode != 3) {
    return
  }
  console.log('receive server message:', msgEvent.msg)
  singleChat(msgEvent.msg)
}

exports.textMsgRoute = textMsgRoute
