module.exports = (client, message) => {
	// if (!message.author.bot) client.botLog.log(message.author.tag+" sent "+message.content+" from "+message.channel);
	if (message.content.indexOf(client.config.prefix) !== 0 || message.author.bot) return;
	const args = message.content.slice(client.config.prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	// client.botLog.log(message.author.tag+" sent command "+commandName+" from <#"+message.channel+"> in "+message.guild.name);
	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	if (command.guildOnly && message.channel.type !== 'text') return message.reply(`I can't execute that command inside DMs!`);
	// if (command.roles && message.channel.type !== 'text') return message.reply(`I can't execute that command inside DMs!`);
	if (command.ownerOnly && message.author.id !== client.config.ownerId) return message.reply(`you do not have permission to run this command!`);
	if (command.roles && !message.member.roles.cache.some(role => command.roles.includes(role.id))) return message.reply(`you do not have the required role to run this command`);
	if (command.args && !args.length) {
		let reply = `arguments are missing!`;
		if (command.usage) reply += `\nThis is the correct usage: \`${client.config.prefix}${command.name} ${command.usage}\``;
		return message.reply(reply);
	}
	if (!client.cooldowns.has(command.name)) client.cooldowns.set(command.name, new Discord.Collection());
	const now = Date.now();
	const timestamps = client.cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
		const timeLeft = (expirationTime - now) / 1000;
		return message.reply(`you need to wait ${timeLeft.toFixed(1)} second(s) before running the \`${command.name}\` command again.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	try {
		command.execute(Discord, message, client, args);
	} catch (error) {
		console.error(error);
		message.reply('an error occured trying to run the command!');
	}
};