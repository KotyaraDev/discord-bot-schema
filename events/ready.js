const { ActivityType } = require('discord.js');

module.exports = async (bot) => {
    try {
        // START | INIT COMMANDS
        const commands = Array.from(bot.commands.values());

        // TODO:
        // This function does not work correctly with a large number of commands. This will be fixed in the future)
        bot.guilds.cache.forEach(async (guild) => {
            const existingCommands = await guild.commands.fetch();

            for (const existingCommand of existingCommands.values()) {
                const command = commands.find(c => c.data.name === existingCommand.name);

                if (command) continue;
                await guild.commands.delete(existingCommand.id);
                console.log(`${config.prefix} Command "${existingCommand.name}" has been REMOVED from the server "${guild.name}"`);
            }

            for (const command of commands) {
                const existingCommand = existingCommands.find(c => c.name === command.data.name);

                if (existingCommand) continue;
                await guild.commands.create(command.data);
                console.log(`${config.prefix} Command "${command.data.name}" has been ADDED to the server "${guild.name}"`);
            }
        });
        // END | INIT COMMANDS
    
        await bot.user.setPresence({
            status: 'online',
            activities: [{
                name: 'for servers',
                type: ActivityType.Watching
            }]
        });
    
        setTimeout(async () => console.log(`${config.prefix} Connect to Discord (${bot.user.tag}) - ✅`), 1000);
        
        // Current state of the bot (Are commands, functions, and other interactions available?)
        config['status'] = true;
      } catch (error) {
        setTimeout(async () => {
            console.log(`${config.prefix} Connect to Discord - ❌`);
            
            await bot.functions.logging('console', `Error when launching bot: ${error}`);
        }, 1000);
    }
};