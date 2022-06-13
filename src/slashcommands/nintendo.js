const run = async (client, interaction) => {
  const guildId = '706543148821643264';
  const roleId = '768475465894985769';

  try {
    const guild = await client.guilds.fetch(guildId);
    const member = await guild.members.fetch(interaction.user.id);
    const role = await guild.roles.fetch(roleId);

    if(!role) return interaction.reply({ content: `Cargo não encontrado`, ephemeral: true });

    if(member.roles.cache.has(role.id)) {
      await member.roles.remove(role.id);
      return interaction.reply({ content: `Você removeu o cargo ${role.name}`, ephemeral: true });

    } else {
      await member.roles.add(role.id);
      return interaction.reply({ content: `Você adicionou o cargo ${role.name}`, ephemeral: true });
      
    }
    
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  name: "nintendo",
  description: "Garante o cargo de Nintendo!",
  perm: "",
  isDm: true,
  options: [],
  run
}