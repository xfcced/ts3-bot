const tencentCloud = require('tencentcloud-sdk-nodejs-hunyuan')
const { Client } = require('tencentcloud-sdk-nodejs-hunyuan/tencentcloud/services/hunyuan/v20230901/hunyuan_client')

const hunyuanClientClass = tencentCloud.hunyuan.v20230901.Client

const clientConfig = {
  credential: {
    secretId: process.env.TENCENT_SECRET_ID,
    secretKey: process.env.TENCENT_SECRET_KEY,
  },
  // region: '',
  profile: {
    httpProfile: {
      endpoint: 'hunyuan.tencentcloudapi.com',
    },
  },
}

let client

function initHunyuanClient() {
  client = new hunyuanClientClass(clientConfig)
}

/**
 *
 * @returns {Client}
 */
function getHYClient() {
  if (client == undefined) {
    initHunyuanClient()
  }
  return client
}

exports.hyClient = getHYClient()
