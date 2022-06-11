const run = async (client, interaction) => {
    const member = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason") || "um bom motivo";

    if (!member) return interaction.reply("Membro não encontrado");

    try {
        await interaction.guild.bans.create(member, { reason });
        return interaction.reply(`${member.user.tag} foi banido por ${reason}`);
    }
    catch(err){
        if (err){
            console.error(err);
            return interaction.reply(`Ban de ${member.user.tag} falhou`);
        }
    }
}

module.exports = {
    name: "ban",
    description: "Bane um membro",
    perm: "MODERATE_MEMBERS",
    options: [
        {
            name: "user", description: "Quem será banido",
            type: "USER", required: true
        },
        {
            name: "reason",
            description: "Razão do timeout",
            type: "STRING",
            required: false
        }
    ],
    run
}