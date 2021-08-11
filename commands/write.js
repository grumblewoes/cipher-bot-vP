const Discord = require('discord.js');
module.exports = {
    name: 'write',
    description: 'write rune names separated by spaces to receive a string with the runic text',
    execute(message, args) {
        let msgList = [];
        let finalString = "";
        let cipher = {
            "fe": "ᚠ",
            "fé": "ᚠ",
            "ur": "ᚢ",
            "úr": "ᚢ",
            "thurs": "ᚦ",
            "as": "ᚬ",
            "reid": "ᚱ",
            "reið": "ᚱ",
            "kaun": "ᚴ",
            "hagall": "ᚼ",
            "naudr": "ᚾ",
            "nauðr": "ᚾ",
            "iss": "ᛁ",
            "íss": "ᛁ",
            "ar": "ᛅ",
            "ár": "ᛅ",
            "sol": "ᛋ",
            "sól": "ᛋ",
            "tyr": "ᛏ",
            "týr": "ᛏ",
            "bjork": "ᛒ",
            "björk": "ᛒ",
            "madr": "ᛘ",
            "maðr": "ᛘ",
            "logr": "ᛚ",
            "lögr": "ᛚ",
            "yr": "ᛦ"
        };

        try {
            console.log("writing");
            console.log(args);
            for (let i = 0; i < args.length; i++) //loop thru letters
            {
                if (args[i] == "")
                finalString += " "; //adds space if index is blank
                else if (Object.keys(cipher).includes(args[i]))
                finalString += cipher[args[i]]; //adds rune if input matches a key in object
                else
                finalString += args[i]; //adds whatever other character as is
            }
            message.channel.send(finalString);
        }
        catch (error)
        {
            console.error(error);
            message.reply('there was an error trying to execute the write command. Make sure you typed the rune names correctly and try again.');
        }
    }
}