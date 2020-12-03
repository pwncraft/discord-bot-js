module.exports = {
	name: 'avatar',
	args: true,
	usage: "<user>",
	description: 'Get the avatar URL of the tagged user',
	execute(Discord, message, client, args)  {
		message.mentions.users.map(user => {
			const msgEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Avatar Lookup')
            .setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
            .setDescription(`Here is a link to ${user.username}'s avatar.\n ${user.avatarURL({dynamic : true})}`)
            .setTimestamp()
			.setThumbnail(user.avatarURL({dynamic : true}))
            .setFooter('Requested By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
            return message.channel.send(msgEmbed);
		});
	}
};
