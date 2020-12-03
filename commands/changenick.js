module.exports = {
	name: 'changenick',
	description: `Change the bot's nickname.`,
	args: true,
	usage: '<nickname>',
	ownerOnly: true,
	execute(message, client, args) {
		console.log(args);
        args = args.join(' ');
        message.guild.members.cache.get(client.user.id).setNickname(args);
	},
};
