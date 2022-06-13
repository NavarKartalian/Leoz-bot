const run = async (client, interaction) => {
  const guildId = '706543148821643264';

  try {
    const guild = await client.guilds.fetch(guildId);
    const member = await guild.members.fetch(interaction.user.id);
    const nickname = interaction.options.getString("nickname");

    if(!member) return interaction.reply({ content: `Membro não encontrado`, ephemeral: true });

    await member.setNickname(nickname, 'troca de apelido');
    return interaction.reply({ content: `Apelido alterado para ${nickname}`, ephemeral: true });
    
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  name: "nickname",
  description: "Muda seu nickname no servidor",
  perm: "SEND_MESSAGES",
  isDm: true,
  options: [
    {
      name: "nickname", description: "Seu novo apelido",
      type: "STRING", required: true
    },
  ],
  run
}