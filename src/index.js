const discord = require('discord.js');
const generateImage  = require('./functions/generateImage');
const { embedWelcome } = require('./content/embeds');

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

const bot = {
  client
};

client.slashcommands = new discord.Collection() ;

client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload);
client.loadSlashCommands(bot, false);

client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return; 

    const slashcmd = client.slashcommands.get(interaction.commandName);

    if (!interaction.inGuild() && !slashcmd.isDm) return interaction.reply("O comando só pode ser usado em servidores");

    if (!slashcmd) return interaction.reply("Comando não encontrado");

    if(slashcmd.isDm) return slashcmd.run(client, interaction);

    if (slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm)) {
      return interaction.reply("Você não tem permissão para usar este comando");
    }

    slashcmd.run(client, interaction);
});

client.on('ready', async () => {
  console.log('I am ready!');
    
    await client.application.commands.set([...client.slashcommands.values()]);
    console.log(`Successfully loaded in ${client.slashcommands.size}`);
});

client.on('messageCreate', async ( message ) => {
  if (!message.author || !message.content) return;

  if ( message.content.toLowerCase() === '/salve' ) {
    message.reply('Salve, ' + message.author.username + '!');

  }
});

client.on('guildMemberAdd', async ( member ) => {
  const img = await generateImage(member);

  member.send({
    files: [img],
    embeds: [embedWelcome][0],
  });
});

client.login(process.env.TOKEN);