const fs = require("fs");

const getFiles = (path, ending) => {
    return fs.readdirSync(path).filter(file => file.endsWith(ending));
}

module.exports = (bot, reload) => {
    const { client } = bot 

    const slashCommands = getFiles("./src/slashcommands/", ".js");

    if (slashCommands.length === 0) {
      console.log("No slash commands loaded");

    }

    slashCommands.forEach(file => {
        if (reload) delete require.cache[require.resolve(`../slashcommands/${file}`)];

        const slashcmd = require(`../slashcommands/${file}`);
        client.slashcommands.set(slashcmd.name, slashcmd);
    });
}