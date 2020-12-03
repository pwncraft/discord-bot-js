module.exports = {
	name: 'uuid',
	description: 'Get a UUID of a MineCraft username',
  	args: true,
	usage: "<minecraft username>",
	execute(Discord, message, client, request, args) {
		request('https://api.mojang.com/users/profiles/minecraft/'+args, { json: true }, (err, res, body) => {
		if (err) {
			console.log(err);
			return message.reply(' invalid username or error occured!');
		} else if (body) {
			var id = body.id.substr(0,8)+"-"+body.id.substr(8,4)+"-"+body.id.substr(12,4)+"-"+body.id.substr(16,4)+"-"+body.id.substr(20);
			const msgEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('UUID Lookup for: '+args)
				.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
				.setDescription('Here are the results of the UUID Lookup :)')
				.addField('**Username**', body.name, true)
				.addField('**UUID**', id, true)
				.setTimestamp()
				.setFooter('Requested By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
			console.log(body.id);
			console.log(body.name);
			return message.channel.send(msgEmbed);
		} else {
			return message.reply(' invalid username or error occured!');
		}
		});
	}
};
