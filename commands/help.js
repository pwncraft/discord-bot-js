const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Command list or specific command info.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(Discord, message, client, args)  {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Use these commands, you must:```');
			data.push(commands.map(command => `${command.name} - ${command.description}`).join('\n'));
			data.push(`\`\`\`Use \`${prefix}help [command name]\` for more information on a command.`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('A list of commands has been sent to your DMs! :)');
				})
				.catch(error => {
					console.error(`I could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('soemthing went wrong trying to send you a DM!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) return message.reply('that\'s not a valid command!');			

		data.push(`\`\`\`Name: ${command.name}`);

		if (command.aliases) data.push(`\nAliases: ${command.aliases.join(', ')}`);
		if (command.description) data.push(`\nDescription: ${command.description}`);
		if (command.usage) data.push(`\nUsage: ${prefix}${command.name} ${command.usage}`);

		data.push(`\nCooldown: ${command.cooldown || 3} second(s)\`\`\``);

		message.channel.send(data, { split: true });
	},
};
