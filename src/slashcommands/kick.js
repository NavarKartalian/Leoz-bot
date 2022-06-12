const run = async (client, interaction) => {
    const member = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason") || "um bom motivo";

    if (!member) return interaction.reply("Membro não encontrado");

    try {
        await interaction.guild.members.kick(member, reason);
        return interaction.reply(`${member.user.tag} foi expulso por ${reason}`);
    }
    catch(err){
        if (err){
            console.error(err);
            return interaction.reply(`Expulsão de ${member.user.tag} falhou`);
        }
    }
}

module.exports = {
    name: "kick",
    description: "Expulsa um membro",
    perm: "MODERATE_MEMBERS",
    isDm: false,
    options: [
        {
            name: "user", description: "Quem será expulso",
            type: "USER", required: true
        },
        {
            name: "reason",
            description: "Razão da expulsão",
            type: "STRING",
            required: false
        }
    ],
    run
}