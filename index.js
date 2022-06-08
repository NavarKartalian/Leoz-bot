const discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const generateImage  = require('./generateImage');

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
    "GUILD_MEMBERS",
    'DIRECT_MESSAGES',
  ],
});

const embed = new MessageEmbed()
  .setColor('#00ff00')
  .setTitle('Bem vindo ao servidor')
  .setURL('https://discord.gg/V3NCuRYVEx')
  .setAuthor({ name: 'Mac', iconURL: 'https://cdn.discordapp.com/avatars/983786363411398718/2466157f779b8508ff021cc529949c49.png' })
  .setDescription('Olá sobrevivente eu sou Mac, o bot do servidor do Léo, eu estou aqui para introduzir vocês ao servidor!')
  .setThumbnail('https://cdn.discordapp.com/icons/706543148821643264/50c305e878706bf6158e3b500e74e02c.png')
  .setDescription('Antes de ter acesso ao resto do servidor, leia as regras no canal #📌│regras-e-cargos, lá que vocês também podem pegar os cargos inclusive o de SOBREVIVENTE que dá acesso ao servidor.')
  .addField('Cargos', 'Os cargos podem ser obtidos atráves dos emojis no canal #📌│regras-e-cargos ou pelos comandos listados abaixo:', true)
  .setTimestamp()
  .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('messageCreate', async ( message ) => {
  if (!message.author || !message.content) return;

  if ( message.content.toLowerCase() === '/salve' ) {
    message.reply('Salve, ' + message.author.username + '!');

  } else if( message.content.toLowerCase() === '/enviar' ) {
    const img = await generateImage(message.member);

    message.member.send({
      files: [img],
      embeds: [embed],
    });
  }
});

client.on('guildMemberAdd', async ( member ) => {
  const img = await generateImage(member);

  member.send({
    content: 'Welcome to the server, ' + member.user.username + '!',
    files: [img],
  });
});

client.login(process.env.TOKEN);