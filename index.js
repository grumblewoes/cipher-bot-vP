
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs'); //node's native file system module, so you can look in other files
require('dotenv').config();
client.login(process.env.BOTTOKEN);
client.commands = new Discord.Collection();

const prefix = "?";
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); //reads and filters files to only read .js, 
//returns array of names

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


client.on('ready', () => { //at startup
	console.log('Sæll!');
	client.user.setActivity("?help", { type: "LISTENING" });
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(" "); //shaves off prefix, splits string based on spaces, returns array
	const commandName = args.shift().toLowerCase(); //returns first word after prefix to use as command

	if (!client.commands.has(commandName)) return; //if no command found, return early

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
