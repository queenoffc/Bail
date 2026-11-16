import { S_WHATSAPP_NET } from '../WABinary/index.js'

const makeReportSocket = (client) => {
  const sendReportFlow = async (opts) => {
    const { jid, type = 'biz_spam_banner_block', spamFlow } = opts

    const node = {
      tag: 'spam_list',
      attrs: {
        jid,
        spam_flow: spamFlow || type
      }
    }

    await client.query({
      tag: 'iq',
      attrs: {
        id: client.generateMessageTag(),
        to: S_WHATSAPP_NET,
        type: 'set',
        xmlns: 'spam'
      },
      content: [node]
    })
  }

  return {
    ...client,
    sendReportFlow
  }
}

export { makeReportSocket }
