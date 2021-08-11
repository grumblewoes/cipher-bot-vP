const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'a list of commands',
    execute(message, args) {
        const runeEmbed = new Discord.MessageEmbed()
        .setColor('#83ffe6')
        .setTitle('List of Commands')
        .addFields(
            {name: '?cipher', value: "Gives a list of runes and their names"},
            {name: '?info', value: "Enter a rune name to get more info about that specific rune"},
            {name: '?transcribe', value: "Enter a latin character to get its possible rune equivalents"},
            {name: '?translate', value: "The opposite to transcribe mode - enter a rune to get its possible latin equivalents"},
            {name: '?write', value: "Write each desired rune in a word by its name, separated by a space. Double spaces separate words. Punctuation/numbers will return as they are. Rune names do not have to be written with icelandic orthography to work (i.e. proper accents over letters)."}
        );
        message.channel.send(runeEmbed);
    }
}