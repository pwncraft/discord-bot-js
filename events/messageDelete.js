module.exports = (client, message) => {
	client.botLog.log(`The message : "${message.content}" by ${message.author.tag} was deleted.`);
};