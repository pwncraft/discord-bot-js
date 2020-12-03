const { MessageAttachment } = require('discord.js');
module.exports = {
	name: 'f',
	description: 'Send the F gif',
	execute(Discord, message, client, args)  {
		const image = new MessageAttachment("https://i.imgur.com/GmOymR3.gif");
        message.channel.send(image).catch(console.error);
        // message.channel.send(":f:").catch(console.error);
	},
};
