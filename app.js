const app = require('./src/index')

// Require necessary node modules
// Make the variables inside the .env element available to our Node project
require("dotenv").config();

const tmi = require("tmi.js");

// Setup connection configurations
// These include the channel, username and password
const client = new tmi.Client({
  options: { debug: true, messagesLogLevel: "info" },
  connection: {
    reconnect: true,
    secure: true,
  },

  // Lack of the identity tags makes the bot anonymous and able to fetch messages from the channel
  // for reading, supervision, spying, or viewing purposes only
  channels: [`${process.env.TWITCH_CHANNEL}`],
});

// Connect to the channel specified using the setings found in the configurations
// Any error found shall be logged out in the console
client.connect().catch(console.error);

// We shall pass the parameters which shall be required
client.on("message", (channel, tags, message, self) => {
  // Lack of this statement or it's inverse (!self) will make it in active
  if (self) return;

  // This logs out all the messages sent on the channel on the terminal
  console.log(message);
});


app.listen(3000,() => console.log('server runner port 3000'))