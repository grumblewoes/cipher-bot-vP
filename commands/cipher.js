const Discord = require('discord.js');
module.exports = {
    name: 'cipher',
    description: 'list of runes and names',
    execute(message, args) {
        const runeEmbed = new Discord.MessageEmbed()
        .setColor('#83ffe6')
        .setTitle('Runes Lookup')
        .addFields(
            {name: 'Runes', value: "ᚠ - fé\nᚢ - úr\nᚦ - thurs\nᚬ - as\nᚱ - reið\nᚴ - kaun\nᚼ - hagall\nᚾ - nauðr\nᛁ - íss\nᛅ - ár\nᛋ - sól\nᛏ - týr\nᛒ - björk\nᛘ - maðr\nᛚ - lögr\nᛦ - yr"},
        );
        message.channel.send(runeEmbed);
    },
}