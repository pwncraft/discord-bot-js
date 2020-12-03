module.exports = async client => {
	console.log(`${client.user.tag}, ready to serve ${client.users.cache.size} users in ${client.guilds.cache.size} servers.`);
	client.user.setActivity(`${client.config.prefix}help`, {type: "PLAYING"});
	mylog = client.guilds.cache.get(client.config.myGuild).channels.cache.get(client.config.logChannel);
};