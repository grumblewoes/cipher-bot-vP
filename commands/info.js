const Discord = require('discord.js');
module.exports = {
    name: 'info',
    description: 'input name of rune, output unicode and possible transcriptions',
    execute(message, args) {
        const runeEmbed = new Discord.MessageEmbed()
        .setColor('#83ffe6')
        .addFields(
            {name: 'Rune:', value: "\u200b"},
            {name: 'Possible Transcriptions:', value: "\u200b"},
            {name: 'Samples:', value: "\u200b"},
            {name: 'Miscellaneous Info:', value: "\u200b"}
        );
		switch (args[0]) {
            case "fé": case "fe":
                runeEmbed.fields[0].value = 'ᚠ';
                runeEmbed.fields[1].value = 'f, v';
                runeEmbed.fields[2].value = 'father/faðir/ᚠᛅᚦᛁᚱ';
                runeEmbed.fields[3].value = "If doing \"v\" before a vowel, use ᚢ instead";
                message.channel.send(runeEmbed);
                break;
            case "úr": case "ur":
                runeEmbed.fields[0].value = 'ᚢ';
                runeEmbed.fields[1].value = 'o/ó/ö, y/ý, u/ú, v, w';
                runeEmbed.fields[2].value = 'Thor/þór/ᚦᚢᚱ';
                runeEmbed.fields[3].value = 'Only used as "v" when coming before vowels';
                message.channel.send(runeEmbed);
                break;
            case "thurs":
                runeEmbed.fields[0].value = 'ᚦ';
                runeEmbed.fields[1].value = 'th/ð/þ';
                runeEmbed.fields[2].value = 'Thor/þórr/ᚦᚢᚱ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "as":
                runeEmbed.fields[0].value = 'ᚬ';
                runeEmbed.fields[1].value = 'a/á';
                runeEmbed.fields[2].value = 'England/iklat/ᛁᚴᛚᚬᛏ';
                runeEmbed.fields[3].value = "Used when paired in group with \"n\" + consonant (ex. EnglANd)";
                message.channel.send(runeEmbed);
                break;
            case "reið": case "reid":
                runeEmbed.fields[0].value = 'ᚱ';
                runeEmbed.fields[1].value = 'r';
                runeEmbed.fields[2].value = 'father/faðir/ᚠᛅᚦᛁᚱ';
                runeEmbed.fields[3].value = "Difference from ᛦ: Used when part of stem of a noun/verb or first character of a word";
                message.channel.send(runeEmbed);
                break;
            case "kaun":
                runeEmbed.fields[0].value = 'ᚴ';
                runeEmbed.fields[1].value = 'g, ng, k, c, q';
                runeEmbed.fields[2].value = 'king/konungr/ᚴᚢᚾᚢᚴᛦ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "hagall":
                runeEmbed.fields[0].value = 'ᚼ';
                runeEmbed.fields[1].value = 'h';
                runeEmbed.fields[2].value = 'valhalla/valhöl/ᚢᛅᛚᚼᛅᛚ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "nauðr": case "naudr":
                runeEmbed.fields[0].value = 'ᚾ';
                runeEmbed.fields[1].value = 'n';
                runeEmbed.fields[2].value = 'norn/ᚾᚢᚱᚾ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "íss": case "iss":
                runeEmbed.fields[0].value = 'ᛁ';
                runeEmbed.fields[1].value = 'i/í, j, e/é';
                runeEmbed.fields[2].value = 'iceland/ísland/ᛁᛋᛚᚬᛏ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "ár": case "ar":
                runeEmbed.fields[0].value = 'ᛅ';
                runeEmbed.fields[1].value = 'a/á, æ, ei, ö';
                runeEmbed.fields[2].value = 'father/faðir/ᚠᛅᚦᛁᚱ';
                runeEmbed.fields[3].value = "Used for all instances of \"a\"except when \"a\" is followed by \"n\" + consonant, then use ᚬ\nTo form \"ei\", place before ᛁ";
                message.channel.send(runeEmbed);
                break;
            case "sól": case "sol":
                runeEmbed.fields[0].value = 'ᛋ';
                runeEmbed.fields[1].value = 's, x, z';
                runeEmbed.fields[2].value = 'iceland/ísland/ᛁᛋᛚᚬᛏ';
                runeEmbed.fields[3].value = "To form \"x\", place after ᚴ";
                message.channel.send(runeEmbed);
                break;
            case "týr": case "tyr":
                runeEmbed.fields[0].value = 'ᛏ';
                runeEmbed.fields[1].value = 't, d, nd';
                runeEmbed.fields[2].value = 'Baldr/ᛒᛅᛚᛏᚱ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "björk": case "bjork":
                runeEmbed.fields[0].value = 'ᛒ';
                runeEmbed.fields[1].value = 'b, p';
                runeEmbed.fields[2].value = 'Baldr/ᛒᛅᛚᛏᚱ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "maðr": case "madr":
                runeEmbed.fields[0].value = 'ᛘ';
                runeEmbed.fields[1].value = 'm';
                runeEmbed.fields[2].value = 'mother/móðir/ᛘᚢᚦᛁᚱ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "lögr": case "logr":
                runeEmbed.fields[0].value = 'ᛚ';
                runeEmbed.fields[1].value = 'l';
                runeEmbed.fields[2].value = 'valhalla/valhöl/ᚢᛅᛚᚼᛅᛚ';
                runeEmbed.fields[3].value = "n/a";
                message.channel.send(runeEmbed);
                break;
            case "yr":
                runeEmbed.fields[0].value = 'ᛦ';
                runeEmbed.fields[1].value = 'y, r';
                runeEmbed.fields[2].value = 'king/konungr/ᚴᚢᚾᚢᚴᛦ';
                runeEmbed.fields[3].value = "Difference from ᚱ: Used when indicating a gender/plural ending for nouns/verbs";
                message.channel.send(runeEmbed);
                break;
            default:
                message.channel.send('I didn\'t quite catch that. Make sure you\'ve typed the name correctly and try again.');
                break;
        }
	},
};