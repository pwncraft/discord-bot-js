module.exports = (guildMember) => {
	console.log('User ' + guildMember.user.username + ' Has Joined the server!');
    let playerRole = guildMember.guild.roles.get("670359297980629012");
    guildMember.addRole(playerRole).catch(console.error);
};
