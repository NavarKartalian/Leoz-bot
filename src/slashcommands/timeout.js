const durations = [
	{ name: "60 seconds", value: 60 * 1000 },
	{ name: "5 minutes", value: 5 * 60 * 1000 },
	{ name: "10 minutes", value: 10 * 60 * 1000 },
	{ name: "30 minutes", value: 30 * 60 * 1000 },
	{ name: "1 hour", value: 60 * 60 * 1000 },
	{ name: "1 day", value: 24 * 60 * 60 * 1000 },
	{ name: "1 week", value: 7 * 24 * 60 * 60 * 1000 },
]

const run = async (client, interaction) => {
    const member = interaction.options.getMember("user");
    const duration = interaction.options.getNumber("duration");
    const reason = interaction.options.getString("reason") || "um bom motivo";

    if (!member) return interaction.reply("Membro não encontrado");
    if(!duration) return interaction.reply("Tempo de espera não especificado");

    try {
        await member.timeout(duration, reason)
        return interaction.reply(`${member.user.tag} foi silenciado por ${durations.find(d=> duration === d.value)?.name} por ${reason}`);
    }
    catch(err){
        if (err){
            console.error(err);
            return interaction.reply(`Timeout de ${member.user.tag} falhou`);
        }
    }
}

module.exports = {
    name: "timeout",
    description: "Silencia um membro",
    perm: "MODERATE_MEMBERS",
    isDm: false,
    options: [
        {
            name: "user", description: "Quem será silenciado",
            type: "USER", required: true
        },
        {
            name: "duration",
            description: "A duração do timeout",
            type: "NUMBER",
            choices: durations,
            require: true
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