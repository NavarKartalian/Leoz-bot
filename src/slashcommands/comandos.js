const { embedCommands } = require('../content/embeds');

const run = async (client, interaction) => {
  try {
    return interaction.reply({
      embeds: [embedCommands][0]
    })

  } catch (err) {
    console.error(err);
    return interaction.reply("Algo deu errado");
  }
}

module.exports = {
  name: "comandos",
  description: "Informação sobre os comandos do bot",
  perm: "SEND_MESSAGES",
  isDm: true,
  options: [],
  run
}