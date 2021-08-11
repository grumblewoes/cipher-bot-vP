const Discord = require('discord.js');
module.exports = {
    name: 'transcribe',
    description: 'input a latin character to receive possible rune matches',
    execute(message, args) {
        console.log("running transcribe");
        const runeEmbed = new Discord.MessageEmbed()
        .setColor('#83ffe6')
        .addFields(
            {name: 'Latin Character:', value: "\u200b"},
            {name: 'Rune Equivalents:', value: "\u200b"},
            {name: '\u200b', value: "No extra conditions for this one"}
        );
		switch (args[0]) {
            case "f":
                runeEmbed.fields[1].value = 'ᚠ';
                runeEmbed.fields[0].value = 'f';
                message.channel.send(runeEmbed);
                break;
            case "v": case "w":
                console.log("hello yea im working")
                runeEmbed.fields[1].value = 'ᚢ';
                runeEmbed.fields[0].value = 'v, w';
                message.channel.send(runeEmbed);
                break;
            case "o": case "ó": case "ö": case "y": case "ý": case "u": case "ú":
                runeEmbed.fields[1].value = 'ᚢ';
                runeEmbed.fields[0].value = 'o/ó/ö, y/ý, u/ú, v';
                message.channel.send(runeEmbed);
                break;
            case "th":
                runeEmbed.fields[1].value = 'ᚦ';
                runeEmbed.fields[0].value = 'th/ð/þ';
                message.channel.send(runeEmbed);
                break;
            case "a": case "á":
                runeEmbed.fields[1].value = 'ᚬ, ᛅ';
                runeEmbed.fields[0].value = 'a/á';
                runeEmbed.fields[2].value = "Use ᛅ for all cases except when \"a\" is followed by \"n\" + a consonant";
                message.channel.send(runeEmbed);
                break;
            case "r":
                runeEmbed.fields[1].value = 'ᚱ, ᛦ';
                runeEmbed.fields[0].value = 'r';
                runeEmbed.fields[2].value = "Use ᚱ when forming stem of a noun/verb; use ᛦ when indicating gender/amount of a noun/verb";
                message.channel.send(runeEmbed);
                break;
            case "k": case "g": case "ng": case "c": case "q":
                runeEmbed.fields[1].value = 'ᚴ';
                runeEmbed.fields[0].value = 'g, ng, k, c, q';
                message.channel.send(runeEmbed);
                break;
            case "h":
                runeEmbed.fields[1].value = 'ᚼ';
                runeEmbed.fields[0].value = 'h';
                message.channel.send(runeEmbed);
                break;
            case "n":
                runeEmbed.fields[1].value = 'ᚾ';
                runeEmbed.fields[0].value = 'n';
                message.channel.send(runeEmbed);
                break;
            case "i": case "í": case "j": case "e": case "é":
                runeEmbed.fields[1].value = 'ᛁ';
                runeEmbed.fields[0].value = 'i/í, j, e/é';
                message.channel.send(runeEmbed);
                break;
            case "ei": case "æ": case "ö":
                runeEmbed.fields[1].value = 'ᛅ';
                runeEmbed.fields[0].value = 'a/á, æ, ei, ö';
                message.channel.send(runeEmbed);
                break;
            case "s": case "z":
                runeEmbed.fields[1].value = 'ᛋ';
                runeEmbed.fields[0].value = 's, x, z';
                message.channel.send(runeEmbed);
                break;
            case "x":
                runeEmbed.fields[1].value = 'ᛋ';
                runeEmbed.fields[0].value = 's, x, z';
                runeEmbed.fields[2].value = "To form \"x\", place ᛋ after ᚴ";
                message.channel.send(runeEmbed);
                break;
            case "t": case "d": case "nd":
                runeEmbed.fields[1].value = 'ᛏ';
                runeEmbed.fields[0].value = 't, d, nd';
                message.channel.send(runeEmbed);
                break;
            case "b": case "p":
                runeEmbed.fields[1].value = 'ᛒ';
                runeEmbed.fields[0].value = 'b, p';
                message.channel.send(runeEmbed);
                break;
            case "m":
                runeEmbed.fields[1].value = 'ᛘ';
                runeEmbed.fields[0].value = 'm';
                message.channel.send(runeEmbed);
                break;
            case "l":
                runeEmbed.fields[1].value = 'ᛚ';
                runeEmbed.fields[0].value = 'l';
                message.channel.send(runeEmbed);
                break;
            case "y":
                runeEmbed.fields[1].value = 'ᛦ';
                runeEmbed.fields[0].value = 'y, r';
                message.channel.send(runeEmbed);
                break;
            default:
                message.channel.send('I couldn\'t understand. Try again?');
                break;
        }
	},
}