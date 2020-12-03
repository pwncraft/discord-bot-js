module.exports = (guildMember) => {
	console.log('User ' + guildMember.user.username + ' Has left the server!');
    client.channels.get("607997814525526070").send("Oh no! "+ guildMember.user.username +" has left the server!");
};
