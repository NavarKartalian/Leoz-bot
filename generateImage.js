const Canvas = require('canvas');
const discord = require('discord.js');

const background = 'https://i.imgur.com/o8bcpKt.jpg';

const dim = {
  height: 2400,
  width: 3840,
  margin: 100,
}

const av = {
  size: 1024,
  x: (dim.width - 1024) / 2,
  y: (dim.height - 1024) / 2,
}

const generateImage = async (member) => {
  const username = member.user.username;
  const discrim = member.user.discriminator;
  const avatarURL = member.user.displayAvatarURL({ format: 'png', size: av.size, dynamic: false });
  
  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext('2d');
  
  const backImg = await Canvas.loadImage(background);

  ctx.drawImage(backImg, 0, 0);
  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height - 2 * dim.margin);

  const avImg = await Canvas.loadImage(avatarURL);
  ctx.save();
  ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avImg, av.x, av.y);
  ctx.restore();

  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.font = '140px Roboto';
  ctx.fillText("Bem vindo ao servidor", dim.width / 2, dim.margin + 350);

  ctx.font = '160px Roboto';
  ctx.fillText(`${username}#${discrim}`, dim.width / 2, dim.height - dim.margin - 300);

  const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');

  return attachment;
}

module.exports = generateImage;