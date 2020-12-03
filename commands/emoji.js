module.exports = {
	name: 'emoji',
	guildOnly: true,
	description: 'List emojis available on the server.',
	execute(Discord, message, client, args)  {
        const emojiList = message.guild.emojis.cache.map(e=>e.toString()).join(" ");
		const msgEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Emoji List')
			.setAuthor(client.user.username, client.user.avatarURL)
			.setDescription(`Emoji's available on this server:\n${emojiList}`)
			.setTimestamp()
			.setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL);
		return message.channel.send(msgEmbed);
	},
};
