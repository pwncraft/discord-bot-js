module.exports = {
	name: 'vote',
	description: 'Rock the vote',
	args: true,
	usage: "<vote description>",
	execute(Discord, message, client, request, args)  {
		// if (!message.member.roles.has("614182171988590603")) return;
		// 	let arg = args.join(' ');
		// 	message.delete(1000);
        //     const msgEmbed = new Discord.RichEmbed()
        //     .setColor('#0099ff')
        //     .setTitle('Vote!')
        //     .setAuthor(client.user.username, client.user.avatarURL)
        //     .setDescription(arg)
		// 	.addField('**Discuss**', "<#655164269985398835>")
        //     .setTimestamp()
        //     .setFooter('Requested By: '+message.author.tag, message.author.displayAvatarURL);
		// 				client.channels.get("649021834985209867").send(msgEmbed).then(function (message) {
        //       message.react('✅').then(() => message.react('❌'))
		//   });

		// 	client.channels.get("675722773351628833").send(message.author.tag+" has opened a new vote in <#649021834985209867>!");

	},
};
