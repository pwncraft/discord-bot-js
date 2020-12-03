module.exports = {
	name: 'reload',
	description: 'reload the bot, if you are the bot owner ;)',
	execute(Discord, message, client, args)  {
        // if (message.author.id !== "229105746036391937") return;
		// 		const { exec } = require('child_process');
		// 		exec('pm2 reload index', (err, stdout, stderr) => {
		// 		  if (err) {
		// 		    //some err occurred
		// 		    console.error(err)
        //     message.channel.send('Error reloading bot!').catch(console.error);
		// 		  } else {
		// 		   // the *entire* stdout and stderr (buffered)
		// 		   console.log(`stdout: ${stdout}`);
		// 		   console.log(`stderr: ${stderr}`);
        //    message.channel.send('Reloading bot now!').catch(console.error);
		// 		  }
		// 		});

	},
};
