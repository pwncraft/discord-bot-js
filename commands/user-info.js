module.exports = {
	name: 'user-info',
    usage: "@username",
	description: 'Display info about yourself or another user.',
	execute(Discord, message, client, request, args)  {
	
        if (!message.mentions.users.size) {

		const msgEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle(message.author.tag+' User Info')
			.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
			.addField('**User ID**', message.author.id, true)
			.addField('**Status**', message.author.presence.status, true)
			.addField('**Created**', message.author.createdAt)
			.addField('**Avatar URL**', message.author.avatarURL({dynamic : true}))
			.setTimestamp()
			.setThumbnail(message.author.avatarURL({dynamic : true}))
			.setFooter('Requested: '+message.author.tag, message.author.avatarURL({dynamic : true}));
		return message.channel.send(msgEmbed);
		}


		const avatarList = message.mentions.users.map(user => {

			const msgEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle(user.tag+' User Info')
				.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
				.addField('**User ID**', user.id, true)
				.addField('**Status**', user.presence.status, true)
				.addField('**Created**', user.createdAt)
				.addField('**Avatar URL**', user.avatarURL({dynamic : true}))
				.setTimestamp()
				.setThumbnail(user.avatarURL({dynamic : true}))
				.setFooter('Requested By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
		  return message.channel.send(msgEmbed);
        });
    },
};
