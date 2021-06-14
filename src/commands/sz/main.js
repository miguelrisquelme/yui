const Discord = require("discord.js");

function execute(message) {
  const messageEmbed = new Discord.MessageEmbed()
    .setTitle("**Quer namorar comigo?** 👉👈 😔")
    .setColor("#fdd092")
    .setThumbnail(
      "https://i.pinimg.com/736x/bb/f1/f4/bbf1f4cca5387fdbf05d15291d837927.jpg"
    )
    .setDescription(
      `
        Quando eu mais precisava de alguém, você surgiu. Não nos conhecíamos, não sabíamos da existência um do outro e mesmo assim, quando nossos olhos se cruzaram nossos corações foram invadidos pela a afinidade, pela atração física, pelo carinho.

        Senti que naquele momento que minha busca pela felicidade havia terminado, enfim te encontrei. Hoje me vejo vivendo um momento realmente especial, descobrindo que amar vale a pena, e que a vida pode ser verdadeiramente feliz.

        Quero viver este sentimento bonito, e ter a certeza que fomos feitos um para o outro. Porque de tudo que descobri ao seu lado, o que me deixa mais feliz e completa é o fato de poder compartilhar com você parte do que sou e tudo que sinto.

        Estamos procurando juntos um caminho, para seguir e podemos acreditar que tudo será maravilhoso, mas uma coisa você pode ter sempre certeza, qualquer que seja a situação, em todos os momentos estarei sempre ao seu lado. Sabe por quê???

        **Porque te amo muito...**
      `
    )
    .setImage("https://i.imgflip.com/44f610.gif")
    .setTimestamp()
    .setFooter("Te amo", "https://img.icons8.com/cotton/2x/like.png");

  message.channel.send(messageEmbed);
}

module.exports = {
  name: "sz",
  description: "Declaração de amor",
  execute,
};
