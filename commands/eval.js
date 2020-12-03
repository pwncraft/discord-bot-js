module.exports = {
	name: 'eval',
	description: 'Run commands',
	args: true,
	usage: "<command>",
	ownerOnly: true,
	execute(Discord, message, client, args)  {
		const clean = text => {
			if (typeof(text) === "string")
			  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			else
				return text;
		  }
		  try {
			const code = args.join(" ");
			let evaled = eval(code);
	   
			if (typeof evaled !== "string")
			  evaled = require("util").inspect(evaled);
	   
			message.channel.send(clean(evaled), {code:"xl"});
		  } catch (err) {
			message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		  }
	},
};
