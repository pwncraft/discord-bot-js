const fs = require('fs');
const Discord = global.Discord = require('discord.js');
const config = require('./config.json');
const botLog = require('./includes/botLog');
const client = new Discord.Client({	ws: { intents: config.intents }});
const request = global.request = require('request');

client.commands = new Discord.Collection();
client.config = config;
client.botLog = botLog;
client.cooldowns = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		const command = require(`./commands/${file}`);
		console.log(`Attempting to load command - ${command.name}`);
		client.commands.set(command.name, command);
	});
});
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		console.log(`Attempting to load event - ${eventName}`);
		client.on(eventName, event.bind(null, client));
	});
});

client.login(client.config.token);