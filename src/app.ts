import qrcode from 'qrcode-terminal'
import { Client } from 'whatsapp-web.js'

const client = new Client({
  puppeteer: {
    args: ['--no-sandbox'],
  },
})

client.on('qr', (qr: string) => {
  qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
  console.log('Client is ready!')
})

client.on('message', async (message) => {
  if (message.body === '!ping') {
    await message.reply('pong')
  }
})

client.initialize()
