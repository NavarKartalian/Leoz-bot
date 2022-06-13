const embedWelcome = [{
  color: '#3498DB',
  author: {
    name: "Mac",
    icon_url: "https://cdn.discordapp.com/avatars/983786363411398718/2466157f779b8508ff021cc529949c49.png"
  },
  image: {
    url: "attachment://welcome.png"
  },
  title: "Bem vindo ao servidor",
  url: "https://discord.gg/rMpHu6WCrX",
  description: "Olá sobrevivente, eu sou Mac, bot do servidor do Léo Z 👋",
  fields: [{
    name: "Eu vim te dar algumas informações sobre o servidor:",
    value: `Para ter acesso ao servidor vocês precisam do cargo de sobrevivente, 
    você consegue esse cargo atráves dos emojis na caixinha do bot em 
    #📌│regras-e-cargos ou através do meu comando /sobrevivente.

    Leiam as regras em #📌│regras-e-cargos, qualquer violação delas resultará em banimento.
    
    Os cargos referentes as plataformas(PC, PLAYSTATION, XBOX...) não são obrigatorios mas ajudam a organizar o servidor. 
    
    Existe um tempo de espera de 10 minutos até que você consiga interagir com o servidor.
    
    Para ter mais informações sobre os cargos, use o comando /cargos.
    
    Qualquer problema com o bot ou com o servidor, entre em contato com NavarHT#3150.`,
    inline: false
  }],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/icons/706543148821643264/50c305e878706bf6158e3b500e74e02c.png",
    text: "Léo Z"
  }
}];

const embedRoles = [{
  color: '#3498DB',
  author: {
    name: "Mac",
    icon_url: "https://cdn.discordapp.com/avatars/983786363411398718/2466157f779b8508ff021cc529949c49.png"
  },
  title: "Cargos",
  url: "https://discord.gg/rMpHu6WCrX",
  description: "Aqui está uma lista dos cargos e seus respectivos comandos:",
  fields: [
  {
    name: "Sobrevivente: /sobrevivente",
    value: "Cargo de Sobrevivente te dá acesso ao servidor.",
  },
  {
    name: "PC: /pc",
    value: "Cargo para quem joga pelo PC.",
  },
  {
    name: "Playstation: /playstation",
    value: "Cargo para quem joga pelo Playstation.",
  },
  {
    name: "Xbox: /xbox",
    value: "Cargo para quem joga pelo Xbox.",
  },
  {
    name: "Nintendo: /nintendo",
    value: "Cargo para quem joga por um Nintendo.",
  },
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/icons/706543148821643264/50c305e878706bf6158e3b500e74e02c.png",
    text: "Léo Z"
  }
}];


module.exports = { embedWelcome, embedRoles };