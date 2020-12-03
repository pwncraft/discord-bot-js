module.exports = {
    name: 'github',
    description: "this is a github command!",
    execute: (Discord, message, client, args) => {
        // console.log(getTheRoleFromCache)
        if(message.member.roles.cache.has('779416389676564530')){
            message.channel.send('https://github.com/Con-trol23/Stalker');
        } else {
            message.channel.send('unfortunately you do not have the right permissions to use this command');
        }
    }
}