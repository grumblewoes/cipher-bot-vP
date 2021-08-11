const Discord = require('discord.js');
module.exports = {
    name: 'translate',
    description: 'input a rune and receive possible latin character matches',
    execute(message, args) {
        console.log("running translate");
        const runeEmbed = new Discord.MessageEmbed()
        .setColor('#83ffe6')
        .addFields(
            {name: 'Rune:', value: "\u200b"},
            {name: 'Latin Equivalents:', value: "\u200b"},
            {name: '\u200b', value: "\u200b"}
        );
		switch (args[0]) {
            case "ᚠ":
                runeEmbed.fields[0].value = 'ᚠ';
                runeEmbed.fields[1].value = 'f, v';
                message.channel.send(runeEmbed);
                break;
            case "ᚢ":
                runeEmbed.fields[0].value = 'ᚢ';
                runeEmbed.fields[1].value = 'o/ó/ö, y/ý, u/ú, v, w';
                message.channel.send(runeEmbed);
                break;
            case "ᚦ":
                runeEmbed.fields[0].value = 'ᚦ';
                runeEmbed.fields[1].value = 'th/ð/þ';
                message.channel.send(runeEmbed);
                break;
            case "ᚬ":
                runeEmbed.fields[0].value = 'ᚬ';
                runeEmbed.fields[1].value = 'a/á';
                message.channel.send(runeEmbed);
                break;
            case "ᛅ":
                runeEmbed.fields[0].value = 'ᛅ';
                runeEmbed.fields[1].value = 'a/á, æ, ei, ö';
                message.channel.send(runeEmbed);
                break;
            case "ᚱ":
                runeEmbed.fields[0].value = 'ᚱ';
                runeEmbed.fields[1].value = 'r';
                message.channel.send(runeEmbed);
                break;
            case "ᛦ":
                runeEmbed.fields[0].value = 'ᛦ';
                runeEmbed.fields[1].value = 'y, r';
                message.channel.send(runeEmbed);
                break;
            case "ᚴ":
                runeEmbed.fields[0].value = 'ᚴ';
                runeEmbed.fields[1].value = 'g, ng, k, c, q';
                message.channel.send(runeEmbed);
                break;
            case "ᚼ":
                runeEmbed.fields[0].value = 'ᚼ';
                runeEmbed.fields[1].value = 'h';
                message.channel.send(runeEmbed);
                break;
            case "ᚾ":
                runeEmbed.fields[0].value = 'ᚾ';
                runeEmbed.fields[1].value = 'n';
                message.channel.send(runeEmbed);
                break;
            case "ᛁ":
                runeEmbed.fields[0].value = 'ᛁ';
                runeEmbed.fields[1].value = 'i/í, j, e/é';
                message.channel.send(runeEmbed);
                break;
            case "ᛋ":
                runeEmbed.fields[0].value = 'ᛋ';
                runeEmbed.fields[1].value = 's, x, z';
                message.channel.send(runeEmbed);
                break;
            case "ᛏ":
                runeEmbed.fields[0].value = 'ᛏ';
                runeEmbed.fields[1].value = 't, d, nd';
                message.channel.send(runeEmbed);
                break;
            case "ᛒ":
                runeEmbed.fields[0].value = 'ᛒ';
                runeEmbed.fields[1].value = 'b, p';
                message.channel.send(runeEmbed);
                break;
            case "ᛘ":
                runeEmbed.fields[0].value = 'ᛘ';
                runeEmbed.fields[1].value = 'm';
                message.channel.send(runeEmbed);
                break;
            case "ᛚ":
                runeEmbed.fields[0].value = 'ᛚ';
                runeEmbed.fields[1].value = 'l';
                message.channel.send(runeEmbed);
                break;
            default:
                message.channel.send('I couldn\'t understand. Try again?');
                break;
        }
	},
}