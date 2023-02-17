import * as dotenv from 'dotenv';
import tmi from 'tmi.js';

import app from './index';

dotenv.config();
console.log(process.env.TWITCH_USERNAME);

const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: 'info' },
  connection: {
    reconnect: false,
    secure: true,
  },

  /* identity: {
    username: `${process.env.TWITCH_USERNAME}`,
    password: `oauth:${process.env.TWITCH_OAUTH}`,
  },  */
  channels: [`${process.env.TWITCH_CHANNEL}`],
});

try {
  client.connect().catch((error: any) => console.error(error));

  client.on('message', (channel: string, tags: tmi.ChatUserstate, message: string, self: any) => {
    if (self) return;

    console.log(message);

  });
} catch (error: any) {
  console.log;
  console.log(error.message);
}

app.listen(3000, () => console.log('server runner port 3000'));
