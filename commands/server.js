module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(Discord, message, client, args)  {
		const msgEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(message.guild.name+' Server Info')
			.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
			.addField('**Created**', message.guild.createdAt, true)
			.addField('**Region**', message.guild.region, true)
			.addField('**Owner**', message.guild.owner, true)
			.addField('**Members**', message.guild.memberCount)
			.addField('**Bot Joined**', message.guild.joinedAt)
			.setTimestamp()
			.setThumbnail(message.guild.iconURL())
			.setFooter('Added By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
		return message.channel.send(msgEmbed);
	},
};
