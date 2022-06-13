const { embedRoles } = require('../content/embeds');

const run = async (client, interaction) => {
  try {
    return interaction.reply({
      embeds: [embedRoles][0]
    })

  } catch (err) {
    console.error(err);
    return interaction.reply("Algo deu errado");
  }
}

module.exports = {
  name: "cargos",
  description: "Informação sobre cargos",
  perm: "SEND_MESSAGES",
  isDm: true,
  options: [],
  run
}