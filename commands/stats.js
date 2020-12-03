const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
	name: 'stats',
	description: 'Get some bot stats',
	args: false,
	execute(Discord, message, client, args)  {
		const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
		const msgEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Bot Stats')
			.setAuthor(client.user.username, client.user.avatarURL({dynamic : true}))
			.addField('**Memory Usage**', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
			.addField('**Uptime**', `${duration}`, true)
			.addField('**Users**', `${client.users.cache.size.toLocaleString()}`, true)
			.addField('**Servers**', `${client.guilds.cache.size.toLocaleString()}`, true)
			.addField('**Channels**', `${client.channels.cache.size.toLocaleString()}`, true)
			.addField('**Discord.js**', `v${version}`, true)
			.addField('**Node.js**', `${process.version}`, true)
			.setTimestamp()
			.setThumbnail(client.user.avatarURL({dynamic : true}))
			.setFooter('Added By: '+message.author.tag, message.author.avatarURL({dynamic : true}));
		return message.channel.send(msgEmbed);
	},
};