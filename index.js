const discord = require('discord.js');
require('dotenv').config();

const client = new discord.Client({
  allowedMentions: {
    parse: ['users', 'roles', 'everyone'],
    repliedUser: true,
    parseEmojis: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
  ],
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('messageCreate', ( message ) => {
  if (!message.author.bot || !message.content) return;

  if ( message.content.toLowerCase() === '/salve' ) {
    message.reply('salvo');
  }
});

client.login(process.env.TOKEN);