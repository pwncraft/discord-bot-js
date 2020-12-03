module.exports = {
	name: 'ping',
	args: false,
	description: 'Bot Ping Time',
	cooldown: 10,
	execute(Discord, message, client, args)  {
		const msgEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Ping')
			.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
			.addField('**API**', `${Math.round(client.ws.ping)}ms`, true)
            .setTimestamp()
            .setFooter('Requested By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
		return message.channel.send(msgEmbed);
	},
};
