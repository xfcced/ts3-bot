const { hyClient } = require('../services/tencentChatSDK')
const { getTSClient } = require('../services/tsServerQuery')

async function singleChat(msgContentText) {
  const paramas = {
    Model: 'hunyuan-standard',
    Messages: [
      {
        Role: 'user',
        Content: '简短回答，不超过中文100个字。' + msgContentText,
      },
    ],
  }

  console.log('request tencent language model')

  hyClient
    .ChatCompletions(paramas)
    .then((res) => {
      const aiReplyText = res.Choices[0].Message.Content
      getTSClient().sendTextMessage(0, 3, aiReplyText)
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}

exports.singleChat = singleChat
